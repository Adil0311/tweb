"use strict";

class ExamManager{
    constructor() {
        this.exams = [];

        this.getPassedExams();
    }
    /**
     * Build the list of my exams
     */
    getPassedExams(){
        this.exams.push(
            new Exam('MF0034','2023-02-01','Algoritmi I', '9', '28'),
            new Exam('MF0158','2023-02-06', 'Basi di dati e sistemi informativi', '6', '30L'),
            new Exam('MF0363','2023-02-15','Paradigmi di programmazione','9', '26'),
            new Exam('MF0164','2022-11-15','Programmazione II', '9', '29')
        )
    }

    /**
     * Add a new exam to the list
     * @param {Exam} exam 
     */
    addExam(exam) {
        this.exams.push(exam);
    }

    /**
     * Get the list of courses for which exams are available
     */
    getCourses() {
        return [
            {name: "Metodologie di programmazione per il web", code: "MF0163", credits: 6},
            {name: "Reti I", code: "S1609", credits: 6},
        ];
    }


    /**
     * Return a filtered array, with only the exams done in a specific year
     * @param {*} year 
     */
    getByYear(year){
        return this.exams.filter( e => e.date.isBetween(year+'-01-01',year+'-12-31'));
    }
}