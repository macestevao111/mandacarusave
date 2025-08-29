// This file contains the JavaScript code for the website. It adds interactivity and handles events.

document.addEventListener('DOMContentLoaded', () => {
    const randomButton = document.getElementById('random-button');
    const output = document.getElementById('output');

    const randomMessages = [
        "Hello, World!",
        "Welcome to the random site!",
        "Have a great day!",
        "Keep smiling!",
        "You're doing great!",
        "Stay positive!",
        "Believe in yourself!",
        "Make today amazing!"
    ];

    randomButton.addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * randomMessages.length);
        output.textContent = randomMessages[randomIndex];
    });
});