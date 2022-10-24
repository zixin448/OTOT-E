import { ormGetAllStudents as _getAllStudents } from "../Model/student-orm.js";
import redisClient from "../index.js";

export async function getAllStudents(req, res) {
    try {

        const all_students = await redisClient.get("all_students");

        if (!all_students) {
            console.log("Not in redic cache");
            const allStudents = await _getAllStudents();
            if (!allStudents) {
                return res.status(400).json({ message: "No students" });
            }

            console.log("done w mongodb part");
            // save to cache yay
            redisClient.setEx("all_students", 100, JSON.stringify(allStudents));
            console.log("done setting key in redis");
            return res.status(200).json({ allStudents: allStudents });
        } else {
            const allStudents = await redisClient.get("all_students");
            return res.status(200).json({ allStudents: allStudents });
        }

    } catch (err) {
        return res.status(400).json({ message: "Error getting all students from database" });
    }
}

// export async function getAllStudents(req, res) {
//     try {

//         const allStudents = await _getAllStudents();
//         if (!allStudents) {
//             return res.status(400).json({ message: "No students" });
//         }
//         return res.status(200).json({ allStudents: allStudents });
//     } catch (err) {
//         return res.status(404).json({ message: "Error getting all students from database" });
//     }
// }