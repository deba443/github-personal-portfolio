'use strict';

const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');
// console.log(btnOpenModal);it will give the list of array which consists of all the bottons whose class name are show-modal.
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

for (let i = 0; i < btnOpenModal.length; i++) {
  console.log('deba');
  btnOpenModal[i].addEventListener('click', function () {
    modal.classList.remove('hidden'); //This is not a selector so we are passing only classname as an argument of this function..after removing this function we cant find the hidden class.so the peoperty of hidden class should be gone.in this modal class there are many more class,we remove hidden class here if we want to remove the more than one classes then pass multiple class which are separated by comma.
    overlay.classList.remove('hidden');
  });
}
//similarly we can make function for openModal
const closeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown',function(e){
  if(e.key==='Escape'){
    closeModal();
  }

})
