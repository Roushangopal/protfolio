const express = require('express');
const studentDetail = require('../models/studentDetail')

const router = express.Router();

router.get('/student', (req, res, next) => {
    res.send('Roushan Raja')
})

router.post('/student', (req, res, next) => {
    let newStudent = new studentDetail({
        name: req.body.name,
        email: req.body.email,
        mob: req.body.mob,
        education: {
            school: {
                name: req.body.schoolName,
                board: req.body.schoolBoard,
                batch: req.body.schoolBatch,
                aggregate: req.body.schoolAggregate
            },
            puc: {
                name: req.body.pucName,
                board: req.body.pucBoard,
                batch: req.body.pucBatch,
                aggregate: req.body.pucAggregate
            },
            college: {
                name: req.body.collegeName,
                board: req.body.collegeBoard,
                batch: req.body.collegeBatch,
                aggregate: req.body.collegeAggregate
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