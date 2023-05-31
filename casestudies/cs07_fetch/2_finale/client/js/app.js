"use strict";

import ExamManager from "./exam-manager.js";
import Exam from "./exam.js";

class App {
    constructor(examsContainer,sidebarContainer) {
        // reference to the two main containers (HTML elements)
        this.examsContainer=examsContainer;
        this.sidebarContainer=sidebarContainer;

        // init the exam manager and get the exam list
        this.examManager = new ExamManager();
        this.examManager.getPassedExams().then(exams => {
            this.exams = exams;
            // add an event listener (click) for each link in the left sidebar
             this.sidebarContainer.querySelectorAll("a").forEach(link => {
                link.addEventListener("click", (event) => {
                    // the HTML element that was clicked
                    const el = event.target;

                    // the 'data-id' property of that element
                    const elId = el.dataset.id;

                    // removing and adding the 'active' class
                    this.sidebarContainer.querySelector("a.active").classList.remove("active");
                    el.classList.add("active");

                    // what happens to our table when I click on the link
                    this.onYearSelected(elId);
                })
            })

            // init the form
            const addForm = document.getElementById('add-form');
            this.initForm(addForm);

            // finally, show all the exams
            this.showExams(this.exams);
        });
  
    }

    /**
     * Init the "add exam" form and set up its callback
     * 
     * @param {*} form the HTML element representing the form
     */
    async initForm(form) {
        // init courses
        const courses = await this.examManager.getCourses();
        courses.forEach((c) => {
            form.course.appendChild(new Option(c.name, c.code));
        });
        
        // change credits according to the selected course
        form.course.addEventListener('change', function() {
            const selectedCourse = form.course.options[form.course.selectedIndex]; 
            form.credits.value = courses.find(course => course.name === selectedCourse.text).credits;
        });

        // set up form callback
        form.addEventListener('submit', this.onFormSubmitted);
    }

    /**
     * Prepare the exam list after selecting a year from the sidebar
     * @param {*} year 
     */
    onYearSelected(year){

        let exams = [];

        // properly fill up the exams array
        if (year==="all"){
            exams = this.exams;
        }else {
            exams = this.examManager.getByYear(year);
        }
        
        // show all the things!
        this.showExams(exams);
    }

    onFormSubmitted = async (event) => {
        event.preventDefault();
        document.getElementById("error-message").innerHTML = '';
        const form = event.target;
        const selectedCourse = form.course.options[form.course.selectedIndex];

        if(form.checkValidity()) {
            const exam = new Exam(selectedCourse.value, form.date.value, undefined, undefined, form.score.value);

            try {
                await this.examManager.addExam(exam);
                this.exams = await this.examManager.getPassedExams();

                // refresh the user interface
                this.showExams(this.exams);
            } catch(error) {
                if (error) {
                    const message = error.error;
                    document.getElementById("error-message").innerHTML = `
                    <div class="alert alert-warning alert-dismissible fade show" role="alert">
                    ${message}
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>`
                }

            } finally {
                //reset the form and close the modal
                form.reset();
                document.getElementById('close-modal').click();
            }
        } 
    }

    /**
     * Create the HTML table for showing the exams
     * @param {*} exams 
     */
    showExams(exams) {
        // empty the exam table
        if(this.examsContainer.innerHTML!==""){
            this.examsContainer.innerHTML="";
        }
        for (let exam of exams){
            const tr = document.createElement("tr");

            const tdDate = document.createElement("td");
            tdDate.innerText = exam.date.format('DD-MM-YYYY');

            const tdName = document.createElement("td");
            tdName.innerText = exam.name;

            const tdCredits = document.createElement("td");
            tdCredits.innerText = exam.credits;

            const tdScore = document.createElement("td");
            tdScore.innerText = exam.score;

            tr.appendChild(tdDate);
            tr.appendChild(tdName);
            tr.appendChild(tdCredits);
            tr.appendChild(tdScore);

            this.examsContainer.appendChild(tr);        
        }
       
    }
     
}

export default App;