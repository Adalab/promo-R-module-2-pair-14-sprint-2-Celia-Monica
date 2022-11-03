'use strict';

const head = document.querySelector('.head');
const face = document.querySelector('.face');

function handleHead(){
    face.innerHTML = ';)';
}

function handleHeadMouse(){
    face.innerHTML = ':)';
}

head.addEventListener('click', handleHead);

head.addEventListener('mouseout', handleHeadMouse);