"use strict";
// *** form defined ***
//1. With HTML Tag
// const form = document.querySelector('form');
// const form = document.querySelector('form')!;
// const form = document.querySelector('form') as HTMLFormElement;
// console.log(form);
//2. With Class
// const form = document.querySelector('.user-form');
const userForm = document.querySelector('.user-form');
// *** input defined ***
// 1. with id
const userName = document.querySelector('#name');
const userEmail = document.querySelector('#email');
const userCountry = document.querySelector('#country');
const userFeedback = document.querySelector('#feedback');
userForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = {
        userName: userName.value,
        userEmail: userEmail.value,
        userCountry: userCountry.value,
        userFeedback: userFeedback.value
    };
    console.log(data);
});
