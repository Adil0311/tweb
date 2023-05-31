// import
const express = require("express");
const morgan = require("morgan");
const sqlite = require("sqlite3");

// init 
const app = express();
const port = 3000;

const db = new sqlite.Database('exams.db', err => console.error(err));

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
    const sql = "SELECT * FROM course";
    db.all(sql, (err,rows)=> {
        if (err) 
            throw err;
        console.log(rows);

        // send a res in JSON
        res.json(rows);
    }  );
})

// GET /courses/:code
app.get('/courses/:code', (req,res)=>{
    // validazione qui
    const courseCode = req.params.code;
    const sql = "SELECT * FROM course WHERE code=?";

    db.get(sql, [courseCode], (err,row)=> {
        if (err) 
            throw err;
        console.log(row);
        if(row) {
            // send a res in JSON
            res.json({code:row.code, name:row.name, credits:row.CFU});
        }
        else {
            // send a res in JSON
            res.status(404).json({error: 'Il corso non esiste'});
        }
    });
});

// GET /exams
app.get('/exams', (req,res)=>{
    // read from db all the exams
    const sql = "SELECT * FROM exam";
    db.all(sql, (err,rows)=> {
        if (err) 
            throw err;
        console.log(rows);

        // send a res in JSON
        res.json(rows);
    });
})

// GET /exams/:id
app.get('/exams/:id', (req,res)=>{
    // validazione qui
    const examId = req.params.id;
    // read form db all the needed information of a course given a code
    const sql = "SELECT date, score, name, CFU FROM exam, course WHERE exam.course_code=course.code AND exam.course_code=?";

    db.get(sql, [examId], (err,row)=> {
        if (err) 
            throw err;
        console.log(row);
        if(row) {
            // send a res in JSON
            res.json({name:row.name, date: row.date, grade: row.score, credits:row.CFU});
        }
        else {
            // send a res in JSON
            res.status(404).json({error: 'Esame non sostenuto'});
        }   
    });

});

// POST /exams
// req:{"code":"MF0363","date":"2023-02-15","grade":26}
app.post('/exams', (req,res)=>{
    // validazione qui
    const code = req.body.code;
    const score = req.body.grade;
    const date = req.body.date;
   
    const sql = "INSERT INTO exam(course_code, date, score) VALUES (?, DATE(?), ?)";
    db.run(sql, [code,date,score], (err)=> {
        if (err) {
            console.error(`sql:${code},${date},${score}`)
            throw err;
        }
        res.end();
    });

});

// PUT /exams/:id
app.put('/exams/:id/:date/:grade', (req,res)=>{
    // validazione qui
    const code = req.params.id;
    const date = req.params.date;
    const grade = req.params.grade;

    const sql = "UPDATE exam SET date=?, score=? WHERE course_code=?";

    db.run(sql, [date,grade,code], (err)=> {
        if (err) 
            throw err;
        res.end();
    });
});

// DELETE /exams/:id
app.delete('/exams/:id', (req,res)=>{
    // validazione qui
    const code = req.params.id;

    const sql = "DELETE FROM exam WHERE course_code=?";

    db.run(sql, [code], (err)=> {
        if (err) 
            throw err;
        res.end();
    });
});

app.listen(port, () => console.log(`server listening at http://localhost:${port}`));
