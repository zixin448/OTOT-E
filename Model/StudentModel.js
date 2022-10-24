import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    studentId: {
        required: true,
        type: Number,
        unique: true
    },
    gender: {
        required: true,
        type: String,
        enum: {
            values: ['Female', 'Male'],
            message: '{VALUE} is not supported'
        }
    },
    level: {
        required: true,
        type: Number,
        min: 1,
        max: 6
    }
})

export default mongoose.model('Student', StudentSchema);