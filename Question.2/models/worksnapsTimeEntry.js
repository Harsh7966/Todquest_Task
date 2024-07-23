const mongoose = require('mongoose');
const { Schema } = mongoose;

const WorksnapsTimeEntrySchema = new Schema({
    student: {
        type: Schema.Types.ObjectId,
        ref: 'Student',
        required: true,
    },
    timeEntries: {
        type: [
            {
                date: {
                    type: String,
                    required: true,
                },
                hoursWorked: {
                    type: Number,
                    required: true,
                },
                description: {
                    type: String,
                    default: '',
                }
            }
        ],
        default: []
    }
}, { timestamps: true });

module.exports = mongoose.model('WorksnapsTimeEntry', WorksnapsTimeEntrySchema);
