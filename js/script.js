
let btn = document.querySelector(".header-burger");
btn.addEventListener('click', (e) => {
  e.preventDefault();

  let activ = document.querySelector(".header-nav-mobile");
  
  activ.classList.toggle('activ')

});