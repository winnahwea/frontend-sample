function openModal() {
  document.getElementById("myModal").style.display = "block";
}

var modal = document.getElementById("myModal");
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  const slides = document.getElementsByClassName("mySlides");
  let modalPreviews = document.getElementsByClassName("modal-preview");

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (let i = 0; i < modalPreviews.length; i++) {
    modalPreviews[i].className = modalPreviews[i].className.replace(
      " active",
      ""
    );
  }

  slides[slideIndex - 1].style.display = "block";
  modalPreviews[slideIndex - 1].className += " active";
}

function validate() {
  form.addEventListener("submit", handleForm);
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  if (name == "") {
    window.alert("Please enter your name.");
    name.focus();
    return false;
  }

  if (email.indexOf("@") == -1) {
    window.alert("Please enter valid email.");
    address.focus();
    return false;
  }

  if (message.length <= 60) {
    window.alert("Please enter more than 60 characters.");
    email.focus();
    return false;
  }
  window.alert("Message submitted.");
  return true;
}
