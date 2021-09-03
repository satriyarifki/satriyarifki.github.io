const myModal = document.querySelectorAll('.modal');
const myInput = document.getElementsByClassName('.input');
const vide = document.querySelectorAll('video');
// myModal.addEventListener('shown.bs.modal', function () {
//   myInput.focus();
// });

console.log(document);
console.log(myModal);
console.log(vide);

for (i = 0; i < myModal.length; i++) {
  myModal[i].addEventListener('hidden.bs.modal', function () {
    for (i = 0; i < myModal.length; i++) {
      vide[i].pause();
    }
  });
}
