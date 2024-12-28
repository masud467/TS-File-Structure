      // *** form defined ***
//1. With HTML Tag
// const form = document.querySelector('form');
// const form = document.querySelector('form')!;
// const form = document.querySelector('form') as HTMLFormElement;
// console.log(form);

//2. With Class
// const form = document.querySelector('.user-form');
const userForm = document.querySelector('.user-form') as HTMLFormElement;


         // *** input defined ***
// 1. with id
const userName = document.querySelector('#name') as HTMLInputElement;
const userEmail = document.querySelector('#email') as HTMLInputElement;
const userCountry = document.querySelector('#country') as HTMLSelectElement;
const userFeedback = document.querySelector('#feedback') as HTMLTextAreaElement

userForm.addEventListener('submit',(event:Event)=>{
  event.preventDefault();
  const data ={
    userName: userName.value,
    userEmail: userEmail.value,
    userCountry: userCountry.value,
    userFeedback: userFeedback.value
  }
  console.log(data);
})