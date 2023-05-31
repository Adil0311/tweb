"use strict";

import Exam from "./exam.js";

class ExamManager{
    constructor() {
        this.exams = [];
    }
    /**
     * Build the list of my exams
     */
    async getPassedExams(){
        let exams = [];
        // call the /exams API
        const response = await fetch("/exams");
        const examsJson = await response.json();
        if (response.ok) {
            for (const ex of examsJson) {
                const course = await fetch (`/courses/${ex.code}`);
                const courseJson = await course.json();
                if (course.ok) {
                    exams.push(new Exam(ex.code, ex.date, courseJson.name, courseJson.credits, ex.score));
                } else {
                    throw course;
                }
            }
            console.log(examsJson);
        } else {
            throw examsJson;
        }
        this.exams = exams;
        return exams;
    }

    /**
     * Add a new exam to the list
     * @param {Exam} exam 
     */
    async addExam(exam) {
        const response = await fetch('/exams', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(exam),
        })
        
        if(response.ok) {
            return;
        }
        else {
            const respJson = await response.json();
            throw respJson;
        }
    }

    /**
     * Get the list of courses for which exams are available
     */
    async getCourses() {
        const response = await fetch("/courses");
        const coursesJson = await response.json();
        if (response.ok) {
            console.log(coursesJson);
            return coursesJson;
        } else {
            throw coursesJson;
        }
    }


    /**
     * Return a filtered array, with only the exams done in a specific year
     * @param {*} year 
     */
    getByYear(year){
        return this.exams.filter( e => e.date.isBetween(year+'-01-01',year+'-12-31'));
    }
}

export default ExamManager;