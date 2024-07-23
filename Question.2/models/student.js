const mongoose = require('mongoose');
const { Schema } = mongoose;

const StudentSchema = new Schema({
    firstName: {
        type: String,
        trim: true,
        default: '',
    },
    lastName: {
        type: String,
        trim: true,
        default: '',
    },
    displayName: {
        type: String,
        trim: true,
    },
    municipality: {
        type: String,
    },
}, { timestamps: true });

module.exports = mongoose.model('Student', StudentSchema);
