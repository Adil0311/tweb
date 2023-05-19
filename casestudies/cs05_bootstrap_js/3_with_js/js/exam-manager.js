"use strtic";

class ExamManager{
    constructor() {
        this.exams = [];

        this.buildMyExams();
    }
    /**
     * Build the list of my exams
     */
    buildMyExams(){
        this.exams.push(
            new Exam(moment('2023-02-01','YYYY-MM-DD'),'Algoritmi I', '9', '28'),
            new Exam(moment('2023-02-06','YYYY-MM-DD'), 'Basi di dati e sistemi informativi', '6', '30L'),
            new Exam(moment('2023-02-15','YYYY-MM-DD'),'Paradigmi di programmazione','9', '26'),
            new Exam(moment('2022-11-15','YYYY-MM-DD'),'Programmazione II', '9', '29')
        )
    }
    /**
     * Return a filtered array, with only the exams done in a specific year
     * @param {*} year 
     */
    getByYear(year){
        return this.exams.filter( e => e.date.isBetween(year+'-01-01',year+'-12-31'));
    }
}