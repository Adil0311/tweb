"use strict";

class ExamsManager {

    constructor() {
        this.exams = [];

        this.creaEsami();
    }

    creaEsami() {
        // pushing all the exams manually
        this.exams.push(
            new Exam(moment("2023/02/01","YYYY/MM/DD"),"Algoritmi I","9","28"),
            new Exam(moment("2023/02/06","YYYY/MM/DD"),"Paradigmi di programmazione","6","30L"),
            new Exam(moment("2023/02/15","YYYY/MM/DD"),"Basi di dati e sistemi informativi","9","26"),
            new Exam(moment("2022/02/04","YYYY/MM/DD"),"Programmazione 2","9","29"),
        )
    }

    /* param {*} year */
    getByYear (year) {
        return this.exams.filter( e => e.date.isBetween(year+"/01/01",year+"/12/31" ) );
    }

}