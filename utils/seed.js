const connection = require('../config/connection');
const { Thought, User } = require('../models');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');

    // drop existing users
    await User.deleteMany({});

    // drop existing thoughts
    await Thought.deleteMany({});

    // create empty array to hold the users
    const users = [];

    // add users to the collection and await the results
    await User.collection.insertMany(users);

    // add thoughts to the collection and await the results
    await Thought.collection.insertMany(thoughts);

    // log out the seed data to indicate what should appear in the database
})
