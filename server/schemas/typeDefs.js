const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Rental {
        comments: [Comment]!
    }

    type Auth {
        token: ID!
        rental: Rental
    }
    type Comment {
        _id: ID
        commentText: String
        commentAuthor: String
        createdAt: String
      }
        
    type User {
        _id: ID!
        username: String!
        email: String!
      }

    
    type Query {
        users: [User]
        user(username: String!): User
        rentals: [Rental]!
        rental(rentalId: ID!): Rental
        me: User
    }
    
    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        
        addComment(rentalId: String!,commentText: String!): Rental
        removeComment(rentalId: String!): Rental

    }
`;

module.exports = typeDefs;

