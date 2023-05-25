"use strict";

class App {

    constructor (examsContainer,asideContainer) {

        // riferimento ai contenitori da manipolare
        this.examsContainer = examsContainer;
        this.asideContainer = asideContainer;

        // inizializzare un gestore di esami per recuperare la lista di esami
        this.examsManager = new ExamsManager();
        this.exams = this.examsManager.exams;

        // associare un comportamento per ogni link dentro aside
        this.asideContainer.querySelectorAll("a").forEach( link => {
            link.addEventListener("click", (event) => {

                const el = event.target;

                // recupera il valore dell'attributo data-id 
                const myId = el.dataset.id;

                // cambiare lo stile per rendere link "attivo"
                this.asideContainer.querySelector("a.active").classList.remove("active");
                el.classList.add("active");

                // dobbiamo passare a questo metodo il valore ottenuto dal link
                this.onYearSelected(myId);
            });
        })

        // visualizzare gli esami selezionati
        this.showExams(this.exams);
    }


    onYearSelected(year){
        let exams = [];

        if (year === "all") {
            exams = this.exams;
        } else {
            exams = this.examsManager.getByYear(year);
        }

        this.showExams(exams);
    }

    showExams(exams){
        this.examsContainer.innerHTML = '';

        exams.forEach(e => {
            const tr = document.createElement("tr");

            const tdDate = document.createElement("td");
            tdDate.innerText = e.date.format("DD-MM-YYYY");

            const tdName = document.createElement("td");
            tdName.innerText = e.name;

            const tdCredits = document.createElement("td");
            tdCredits.innerText = e.credits;

            const tdGrade = document.createElement("td");
            tdGrade.innerText = e.grade;

            tr.appendChild(tdDate);
            tr.appendChild(tdName);
            tr.appendChild(tdCredits);
            tr.appendChild(tdGrade);

            this.examsContainer.appendChild(tr);

        })


        



    }

}