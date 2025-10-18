function toggleMenu() {
  document.querySelector('.hamburger_menu').addEventListener('click', (e) => {
    let navbar = document.querySelector('.navbar_menu')

    if (navbar.style.display === "flex") {
      navbar.style.display = "none"
      e.target.src = "./images/icon-hamburger.svg"
    } else {
      navbar.style.display = "flex"
      e.target.src = "./images/icon-close.svg"
    }

  })
}
toggleMenu()

document.addEventListener('click', e => {
  if (e.target.closest('.hamburger')) toggleMenu();
});


let slideIndex = 0
showSlides()

function showSlides() {
  let slides = document.querySelectorAll(".mySlides")

  slides.forEach(e => e.style.display = "none")
  slideIndex++

  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].style.display = "flex";

  setTimeout(showSlides, 2000)
}