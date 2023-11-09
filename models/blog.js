const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    videoLink: {
        type: String,
        required: true
    },
    question1: {
        type: String,
        required: true,
        option1: {
            type: String,
            required: true,
            correctYN: Boolean,
            helpString: String
        },
        option2: {
            type: String,
            required: true,
            correctYN: Boolean,
            helpString: String
        },
        option3: {
            type: String,
            required: true,
            correctYN: Boolean,
            helpString: String
        }
    },
    question2: {
        type: String,
        required: true,
        option1: {
            type: String,
            required: true,
            correctYN: Boolean,
            helpString: String
        },
        option2: {
            type: String,
            required: true,
            correctYN: Boolean,
            helpString: String
        },
        option3: {
            type: String,
            required: true,
            correctYN: Boolean,
            helpString: String
        }
    },
    question3: {
        type: String,
        required: true,
        option1: {
            type: String,
            required: true,
            correctYN: Boolean,
            helpString: String
        },
        option2: {
            type: String,
            required: true,
            correctYN: Boolean,
            helpString: String
        },
        option3: {
            type: String,
            required: true,
            correctYN: Boolean,
            helpString: String
        }
    }

}, {timestamps: true})

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;