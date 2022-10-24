import StudentModel from "./StudentModel.js";
import 'dotenv/config';

import mongoose from 'mongoose';

const mongoDB = process.env.DATABASE_URL;
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

let db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

export async function getAllStudents() {
    return StudentModel.find();
}