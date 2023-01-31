const { Schema, model } = require('mongoose');
const Reaction = require('./Reaction');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String, 
            required: true,
            minLength: 1, 
            maxLength: 280,
        },
        //Use a getter method to format the timestamp on query
        createdAt: {
            type: Date,
            default: Date.now,
        },
        username: {
            type: String, 
            required: true,
        },
        //array of nested documents created with the reactionSchema
        reactions: [ Reaction ],
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

