var myModal = document.querySelector('.modal');
const myInput = document.getElementsByClassName('.input');

// myModal.addEventListener('shown.bs.modal', function () {
//   myInput.focus();
// });

console.log(document);
console.log(myModal);
var vide = document.querySelector('video');
var closo = document.querySelector('.clos');

document.getElementById('myVideo');
document.getElementsByClassName('.clos');

for (i = 0; i < myModal.length; i++) {
  myModal[i].addEventListener('show', function () {
    console.log('ok');
  });
}

// clos.addEventListener('click', function () {
//   console.log('close');
// });

document.getElementsByClassName('.pid').onplay = function () {
  console.log('play');
};

$('.pid').onplay = function () {
  console.log('play');
};
