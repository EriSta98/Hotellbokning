const form = document.getElementById("bookingForm");   /*Hämta bokningsformuläret*/
const confirmationContainer = document.getElementById("confirmationContainer")  /*Hämta bekräftelsemeddelandet och länk till startsidan*/
const title = document.getElementById("bookingTitle");  /*Hämta titeln ("boka ditt rum" i bokningsformuläret)*/

form.addEventListener("submit", function(event){ /*Lyssnar efter händelse (knapptryck) i bokningsformuläret*/

    event.preventDefault();  /*Förhindra att formuläret skickas eller att sidan laddas om (så att bekräftelsemeddelandet kan visas)*/

    form.style.display = "none";  /*Gömmer formuläret när man trycker på boka*/

    title.style.display = "none"; /*Gömmer "boka ditt rum" för renare UI*/

    confirmationContainer.classList.remove("hidden") /*När boka knappen trycks, göms hidden klassen/länken och formuläret försvinner samt bekräftelsemeddelandet visas*/
})