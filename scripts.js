const swithElement = document.querySelector('.switch');

swithElement.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});