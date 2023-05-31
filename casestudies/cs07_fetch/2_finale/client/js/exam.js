"use strict";

class Exam {

    constructor(code,date,name,credits,score) {
        this.code = code;
        this.date = moment(date);
        this.name = name;
        this.credits = credits;
        this.score = score;
    }

}

export default Exam;