const { AuthenticationError } = require('apollo-server-express');
const { User, Rental } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        users: async () => {
            return User.find();
        },
        user: async (parent, { username }) => {
            return User.findOne({username  });
        },
        
        rentals: async () => {
            return Rental.find().sort({ createdAt: -1 });
        },
        rental: async (parent, { rentalId }) => {
            return Rental.findOne({_id: rentalId });
        },
        me: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id }).populate('rental')
            }
            throw new AuthenticationError('You need to be looged in!!!');
        },
    },

    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user };
        },
        login: async (parent, {email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('No user found with this email address :(');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials :|');
            }

            const token = signToken(user);

            return { token, user };
        },
        addComment: async (parent, {rentalId,commentText},context) => {
            if (context.user) {
                return Rental.findOneAndUpdate(
                  { _id: rentalId },
                  {
                    $addToSet: {
                      comments: { commentText, commentAuthor: context.user.username },
                    },
                  },
                  {
                    new: true,
                    runValidators: true,
                  }
                );
              }
              throw new AuthenticationError('You need to be logged in!');
            },
        
        removeComment: async (parent, {rentalId,commentId},context) => {
            if (context.user) {
                return Rental.findOneAndUpdate(
                  { _id: rentalId },
                  {
                    $pull: {
                      comments: {
                        _id: commentId,
                        commentAuthor: context.user.username,
                      },
                    },
                  },
                  { new: true }
                );
              }
              throw new AuthenticationError('You need to be logged in!');
            },
          },
};

module.exports = resolvers;
