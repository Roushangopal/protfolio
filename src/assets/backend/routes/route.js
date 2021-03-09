const express = require('express');
const studentDetail = require('../models/studentDetail')

const router = express.Router();

router.get('/', (req, res, next) => {
    res.send('Roushan Raja')
});

router.get('/student', (req, res) => {
    studentDetail.find((err, student) => {
        res.json(student);
    })
});

router.post('/student', (req, res, next) => {
    let newStudent = new studentDetail({
        name: req.body.name,
        email: req.body.email,
        mob: req.body.mob,
        education: {
            school: {
                name: req.body.education.school.name,
                board: req.body.education.school.board,
                batch: req.body.education.school.batch,
                aggregate: req.body.education.school.aggregate
            },
            puc: {
                name: req.body.education.puc.name,
                board: req.body.education.puc.board,
                batch: req.body.education.puc.batch,
                aggregate: req.body.education.puc.aggregate
            },
            college: {
                name: req.body.education.college.name,
                board: req.body.education.college.board,
                batch: req.body.education.college.batch,
                aggregate: req.body.education.college.aggregate
            }
        }
    });

    newStudent.save((err, result) => {
        if (err) {
            res.json({ "msg": "Failed", "Error": err });
        }
        else {
            res.json({ "msg": "Success" });
        }
    })
});

module.exports = router;