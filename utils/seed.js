const connection = require('../config/connection');
const { Thought, User } = require('../models');
const { randomName, randomThought } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');

    // drop existing users
    await User.deleteMany({});

    // drop existing thoughts
    await Thought.deleteMany({});

    // create empty array to hold the users
    const users = [];
    const thoughts = [];

    for (let i = 0; i < 10; i++) {
        const username = randomName();
        const email = `${username}@email.com`;
        users.push({
            username,
            email,
        })
    };
    // const thoughtText = randomThought();
    // thoughts.push({
    //     thoughtText,
    //     username
    // })

    // for( let i = 0; i < 10; i++){
    //     const thoughtText = randomThought();
    //     const username = randomName();
    //     thoughts.push({
    //        thoughtText,
    //        username,
    //     }); 
    // }


    // add users to the collection and await the results
    await User.collection.insertMany(users);

    // add thoughts to the collection and await the results
    await Thought.collection.insertOne({
        thoughtText: randomThought(),
        username: randomName(),
    });

    // log out the seed data to indicate what should appear in the database
    console.table([users, thoughts]);
    console.info('Seeding complete!');
    process.exit(0);
})
