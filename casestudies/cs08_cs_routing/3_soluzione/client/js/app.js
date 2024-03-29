import {getCourses, getPassedExams } from './api.js';
import {createExamRow, createExamTable} from './templates/exam-template.js';
import {createCourseRow, createCourseTable} from './templates/course-template.js';
import createNavLinks from './templates/nav-template.js';
import page from "//unpkg.com/page/page.mjs";

class App {

    constructor(appContainer, navLinks) {
        // reference to the the exam container (HTML element)
        this.appContainer = appContainer;
        
        // client-side routing with Page.js
        page('/exams', () => {
            navLinks.innerHTML = '';
            navLinks.insertAdjacentHTML("beforeend",createNavLinks('exams'));
            this.showExams();
        });
        page('/', '/exams');

        page('/courses', () => {
            navLinks.innerHTML = '';
            navLinks.insertAdjacentHTML("beforeend",createNavLinks('courses'));
            this.showCourses();
        });
        page();


    }

    /**
     * Create the HTML table for showing the exams
     * @param {*} exams 
     */
    showExams = async () => {
        const exams = await getPassedExams();
        
        this.appContainer.innerHTML = createExamTable();
        const examTable = document.querySelector('#my-exams');

        for(let exam of exams) {
            const examRow = createExamRow(exam);
            examTable.insertAdjacentHTML("beforeend", examRow);
        }
    }

    /**
     * Create the HTML table for showing the courses
     * @param {*} exams 
     */
    showCourses = async () => {
        const courses = await getCourses();
        
        this.appContainer.innerHTML = createCourseTable();
        const courseTable = document.querySelector('#my-courses');

        for(let course of courses) {
            const courseRow = createCourseRow(course);
            courseTable.insertAdjacentHTML("beforeend", courseRow);
        }
    }
}

export default App;
