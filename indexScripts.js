var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
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



