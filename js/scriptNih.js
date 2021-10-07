const myModal = document.querySelectorAll('.modal');
const myInput = document.getElementsByClassName('.input');
const vide = document.querySelectorAll('video');
const navbar = document.querySelector('.navbar');
const nava = document.querySelectorAll('.nav-link');
// myModal.addEventListener('shown.bs.modal', function () {
//   myInput.focus();
// });

// console.log(document);
// console.log(myModal);
// console.log(vide);
console.log(scrollY);
window.addEventListener('scroll', function () {
  if (this.scrollY >= 610) {
    navbar.classList.replace('bg-opacity-100', 'bg-opacity-25');
    navbar.classList.replace('navbar-dark', 'navbar-light');
  } else {
    navbar.classList.replace('bg-opacity-25', 'bg-opacity-100');
    navbar.classList.replace('navbar-light', 'navbar-dark');
  }
});

for (i = 0; i < myModal.length; i++) {
  myModal[i].addEventListener('hidden.bs.modal', function () {
    for (i = 0; i < myModal.length; i++) {
      vide[i].pause();
      vide[i].load();
    }
  });
}

for (let i = 0; i < vide.length; i++) {
  vide[i].volume = 0.5;
}
