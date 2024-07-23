const Student = require('../models/student');
const WorksnapsTimeEntry = require('../models/worksnapsTimeEntry');

const createStudent = async (req, res) => {
    try {
        const { firstName, lastName, displayName, municipality } = req.body;

        const savedStudent = await Student.create({ firstName, lastName, displayName, municipality });

        console.log("Stutent_created", savedStudent);
        res.status(201).json(savedStudent);
    } catch (error) {
        res.status(500).json({ error: 'Error creating student', details: error.message });
    }
};

const worksnapstimeentries = async (req, res) => {
    try {
        const { student, timeEntries } = req.body;

        // Check if the student exists
        const studentExists = await Student.find(student._id);
        if (!studentExists) {
            return res.status(404).json({ message: 'Student not found' });
        }

        const done= await WorksnapsTimeEntry.create({ student, timeEntries });

        if(done){
            console.log(done);
            res.status(200).json({ message: 'Time entries saved successfully', done});
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error', error });
    }
};


const showStudentTimeEntries = async (req, res) => {
    try {
        const students = await Student.find().exec();
        const result = [];

        for (const student of students) {
            const timeEntries = await WorksnapsTimeEntry.find({ student: student._id }).exec();
            console.log(`Student: ${student.firstName} ${student.lastName}, Time Entries:`, timeEntries);
            result.push({
                student: `${student.firstName} ${student.lastName}`,
                timeEntries: timeEntries.length > 0 
                    ? timeEntries.flatMap(entry => entry.timeEntries) 
                    : 'No time entries found',
            });
        }

        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching student time entries', details: error.message });
    }
};


module.exports = {
    showStudentTimeEntries,
    createStudent,
    worksnapstimeentries
};
