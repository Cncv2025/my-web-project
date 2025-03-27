// This file contains the JavaScript code for the web application.
// It handles the interactive functionality and any dynamic behavior of the web page.

document.addEventListener('DOMContentLoaded', () => {
    const greetingElement = document.getElementById('greeting');
    greetingElement.textContent = 'Welcome to My Web Project!';

    const button = document.getElementById('myButton');
    button.addEventListener('click', () => {
        alert('Button clicked!');
    });
});