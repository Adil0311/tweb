// imports
const express = require("express");
const morgan = require("morgan");

const {check, validationResult} = require('express-validator');

const dao = require("./dao.js");


// init 
const app = express();
const port = 3000;

// set up the middleware
app.use(morgan('tiny'));

// serving static request
app.use(express.static('client'));

// interpreting form-encoded parameters
app.use(express.urlencoded({ extended: true }));

// interpreting json-encoded parameters
app.use(express.json());

// REST API (corso, esame)
// Risorse: corso ed esame

// GET /courses
app.get('/courses', (req,res)=>{
    // read from db all the courses
    dao.getAllCourses()
    .then(courses => res.json(courses))
    .catch(error => res.status(500).json(error));
});

// GET /courses/:code
app.get('/courses/:code', (req,res)=>{
    const courseCode = req.params.code;
    dao.getCourseByCode(courseCode)
    .then(course => res.json(course))
    .catch(error => res.status(404).json(error));
});

// GET /exams
app.get('/exams', (req,res)=>{
    dao.getAllExams()
    .then( exams => res.json(exams))
    .catch( error => res.status(500).json(error));
});

// GET /exams/:id
app.get('/exams/:id', (req,res)=>{
    const examId = req.params.id;
    dao.getExamByCode(examId)
    .then(exam => res.json(exam))
    .catch(error => res.status(404).json(error));
});

// POST /exams
app.post('/exams',   [
    check('score').isInt({min: 18, max: 30}),
    check('code').isLength({min: 5, max: 6}),
], (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(422).json({errors: errors.array()});
    }

    const exam = {
        code: req.body.code,
        score: req.body.score,
        date: req.body.date,
    };
    dao.insertNewExam(exam)
    .then((result) => res.status(201).header('Location', `/exams/${result}`).end())
    .catch((err) => res.status(503).json({ error: 'Database error during the creation'}));
});


app.listen(port, () => console.log(`server listening at http://localhost:${port}`));
