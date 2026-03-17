const form = document.getElementById("bookingForm");
const confirmation = document.getElementById("confirmation");
const title = document.getElementById("bookingTitle");

form.addEventListener("submit", function(event){

    event.preventDefault();

    form.style.display = "none";

    title.style.display = "none";

    confirmation.classList.remove("hidden");
})