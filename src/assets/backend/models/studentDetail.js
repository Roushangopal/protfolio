const mongoose = require('mongoose');

const schema = mongoose.Schema;

const studentDetail = new schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    mob: {
        type: String,
        required: true,
        unique: true
    },
    education: {
        school: {
            name: {
                type: String,
                required: true
            },
            board: {
                type: String,
                required: true
            },
            batch: {
                type: String,
                required: true
            },
            aggregate: {
                type: String,
                required: true
            }
        },
        puc: {
            name: {
                type: String,
                required: true
            },
            board: {
                type: String,
                required: true
            },
            aggregate: {
                type: String,
                required: true
            }
        },
        college: {
            name: {
                type: String,
                required: true
            },
            board: {
                type: String,
                required: true
            },
            aggregate: {
                type: String,
                required: true
            }
        }
    }
});

const student = mongoose.model('student', studentDetail);

module.exports = student;
