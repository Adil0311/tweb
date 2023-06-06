"use strict";

// DAO (Data Access Object) module for accessing course and exams

const sqlite = require("sqlite3");
const db = new sqlite.Database('exams.db', err => {
    if (err) throw err;
});

exports.getAllCourses = function () {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM course';
        db.all(sql, (err,rows) => {
            if (err) {
                reject(err);
                return;
            }

            const courses = rows.map( (row)=> ({code:row.code, name:row.name, credits:row.CFU}));
            resolve(courses);
        });
    });
};

exports.getAllExams = function() {
    return new Promise((resolve, reject) => {
        // read from db all the exams
        const sql = "SELECT code, name, date, score, CFU, id FROM exam, course WHERE exam.course_code=course.code";
        db.all(sql, (err,rows)=> {
            if (err) {
                reject(err);
                return;
            }
            // transform 'rows' (query results) into an array of objects
            const exams = rows.map( row => ({
                code:row.code,
                name:row.name, 
                date:row.date, 
                score:row.score, 
                credits:row.CFU,
                id:row.id
            }));
            resolve(exams);
        });
    });
};
