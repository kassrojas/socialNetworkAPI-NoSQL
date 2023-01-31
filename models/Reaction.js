const { Schema, model, SchemaType } = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionId: {
            type: SchemaType.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            maxLength: 280,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date, 
            default: Date.now,
        },
    },
    {
        toJSON: {
            getters: true,
        },
        id: false,
    }
);

//This will not be a model, but rather will be used as the reaction field's subdocument schema in the Thought model.
module.exports = reactionSchema;