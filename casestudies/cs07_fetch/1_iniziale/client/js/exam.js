"use strict";

class Exam {

    static counter = 0;

    constructor(code,date,name,credits,score) {
        this.id = Exam.counter++;
        this.code = code;
        this.date = moment(date);
        this.name = name;
        this.credits = credits;
        this.score = score;
    }

}