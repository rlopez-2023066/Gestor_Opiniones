import {Schema, model} from 'mongoose';

const commentSchema = Schema(
    {
        description: {
            type: String,
            required: [true, 'Description is required'],
            maxLength: [500, 'Description must be less than 500 characters'],
        },

        user:{
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: [true, 'User is required'],
        },
        
        publication: {
            type: Schema.Types.ObjectId,
            ref: 'Publication',
            required: true
        }
    }
)

export default model ('Comment', commentSchema)