const { Schema, model } = require('mongoose');

// const validateEmail = (email) => {
//     const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     return re.test(email);
// };

const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        email: {
            type: String,
            unique: true,
            required: true,
            // validate: validateEmail,
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/],
        },
        //array of _id values referencing the Thought model
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought',
            },
        ],
        // array of _id values referncing the User model (self-refernce)
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User',
            },
        ]
    },
    { // Indicating that we want virtuals to be included with our response, overriding the default behavior
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

// Create a virtual called friendCount that retrieves the length of the user's friends array field on query
userSchema
    .virtual('friendCount')
    .get(function () {
        return this.friends.length;
    })
    .set(function() {
        this.set({ length });
    });

const User = model('user', userSchema);

module.exports = User;