class Polygon {

    constructor(height, width) {
        this.name = 'Polygon';
        this.height= height;
        this.width= width;
    }
   
    sayHistory() {
        console.log('"Polygon" is derived from the Greek polus(many) '+'and gonia(angle).');
    }
   }

const pol = new Polygon(30,20);
pol.sayHistory();
console.log(pol.height);
console.log(pol.width);