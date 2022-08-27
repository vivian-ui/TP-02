// Import stylesheets
import './style.css';
import { Person } from 'person.ts';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

let person = new Person('a', 'b', 'c', '1');
const appDiv1: HTMLElement = document.getElementById('app.fullname');
appDiv1.innerHTML = `<p>${Person.getFullName()}r</p>`;
