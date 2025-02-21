import {Schema, model} from 'mongoose';

const publicationSchema = Schema (
    {
        title: {
            type: String,
            required: [true, 'Title is required'],
            maxLength: [500, 'Title must be less than 500 characters'],
            minLength: [10, 'Title must be more than 10 characters']
        },

        category: {
            type: Schema.Types.ObjectId,
            ref: 'Category',
            required: [true, 'Category is required']
        },

        mainText: {
            type: String,
            required: [true, 'Main text is required'],
            maxLength: [10000, 'Main text must be less than 10000 characters'],
        },

        comments: [{
            type: Schema.Types.ObjectId,
            ref: 'Comment'
        }],

        user: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: [true, 'User is required']
        }
    }
)

export default model('Publication', publicationSchema);