const db = require('../config/connection');
const { User, Property, Client } = require('../models');
const userSeeds = require('./userSeeds.json');
const clientSeeds = require('./clientSeeds.json');
const propertySeeds = require('./propertySeeds.json');

db.once('open', async () => {
    try {
        await User.deleteMany({});
        await Client.deleteMany({});
        await Property.deleteMany({});



        await User.insertMany(userSeeds);

        console.log(1);
        await Client.insertMany(clientSeeds);
        console.log(2);


        console.log(3);
        await Property.insertMany(propertySeeds);
        console.log(4);

    
    } catch (err) {
        console.error(err);
        process.exit(1);
    }

    console.log('all done :)!!!');
    process.exit(0);
});