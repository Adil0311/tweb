"use strict";

import App from "./app.js"

// getting the containers
const sidebarContainer = document.querySelector("#sidebar");
const examsContainer = document.querySelector("#exams");

// creating app
const app = new App(examsContainer,sidebarContainer);
