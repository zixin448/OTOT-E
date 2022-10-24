import { getAllStudents } from './repository.js';

export async function ormGetAllStudents() {
    try {
        const allStudents = await getAllStudents();
        return allStudents;
    } catch (err) {
        console.log("ERROR: Database error");
        return { err };
    }
}