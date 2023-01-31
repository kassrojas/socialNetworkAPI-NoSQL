const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String, 
            required: true,
            minLength: 1, 
            maxLength: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        //Use a getter method to format the timestamp on query
        username: {
            type: String, 
            required: true,
        },
        reactions: [
            //array of nested documents created with the reactionSchema
        ]
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

//Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.
thoughtSchema
    .virtual('reactionCount')
    .get(function (){
        return this.reactions.length;
    });

const Thought = model('thought', thoughtSchema);

module.exports = Thought;

