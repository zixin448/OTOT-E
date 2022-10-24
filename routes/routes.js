const express = require('express');


const router = express.Router();
const studentModel = require('../Model/StudentModel');

//Post
router.post('/', async (req, res) => {

    const data = new studentModel({
        name: req.body.name,
        studentId: req.body.studentId,
        gender: req.body.gender,
        level: req.body.level
    })

    try {
        const dataToSave = data.save();
        res.status(200).json(dataToSave);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
})

//Get All
router.get('/', async (req, res) => {
    try {
        const allDoc = await studentModel.find();
        res.status(200).json({ allDoc });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
})

//Get By ID
router.get('/:id', (req, res) => {
    res.send('Get By ID API');
})

//Delete By ID
router.delete('/:id', (req, res) => {
    res.send('Delete By ID API');
})

//Delete All
router.delete('/', async (req, res) => {
    try {
        await studentModel.remove({});
        res.send('All documents have been cleared');
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
})

module.exports = router;