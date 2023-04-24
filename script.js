"use strict";

const button = document.getElementById('button');
const toasts = document.getElementById('toasts');

const messages = [
    'Message One',
    'Message Two',
    'Message Three',
    'Message Four',
]

const types = ['info', 'success', 'error']

button.addEventListener('click', () => createNotification());

function createNotification(message = null, type = null) {
    const toast = document.createElement('div');

    toast.classList.add('toast');
    // toast.classList.add(type ? type : getRandomType());

    toast.classList.add(type ? type : types[Math.floor(Math.random()*types.length)]);

    toast.innerHTML = message ? message : messages[Math.floor(Math.random()*messages.length)];

    // toast.innerHTML = messages[Math.floor(Math.random()*messages.length)];

    toasts.appendChild(toast);

    // This one SetTimeout was my version and it was a bit longer as it should be.

    // setTimeout(removeElement, 4000);

    // function removeElement() {
    //     const element = document.querySelector('.toast');
    //     element.remove();
    // } 

    setTimeout(() => {
        toast.remove();
    }, 4000)
}

// function getRandomType() {
//     return types[Math.floor(Math.random()*types.length)];
// }