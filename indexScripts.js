let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}


function toggleMenu() {
    const menu = document.querySelector('.menu-list');
    menu.classList.toggle('show');
  }
  

  document.getElementById('quoteForm').addEventListener('submit', function (event) {
    // Simple validation to check if required fields are filled
    var form = event.target;
    if (!form.name.value || !form.email.value || !form.service.value) {
        alert('Please fill in all required fields.');
        event.preventDefault(); // Prevent form submission
    }
});
