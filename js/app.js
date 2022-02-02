'use strict'

const plusOne = document.querySelector('.rsvp-form #plusOne');

const plusOneField = document.querySelector('.plus-one-field');

if(plusOne.checked) {
    plusOneField.classList.remove('hide-field');
}

const showField = function () {
    plusOneField.classList.remove('hide-field');
}
const hideField = function () {
    plusOneField.classList.add('hide-field');
}






