const connection = require('../config/connection');
const { Thought, User } = require('../models');
const { randomName } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');

    // drop existing users
    await User.deleteMany({});

    // drop existing thoughts
    await Thought.deleteMany({});

    // create empty array to hold the users
    const users = [];

    for (let i = 0; i < 5; i++) {
        const username = randomName();
        const randomNumber = Math.floor(Math.random() * 100);
        const email = `${username}${randomNumber}@email.com`;
        users.push({
            username,
            email,
        })
    };
    
    // add users to the collection and await the results
    await User.collection.insertMany(users);

    // log out the seed data to indicate what should appear in the database
    console.table(users);
    console.info('Seeding complete!');
    process.exit(0);
})
