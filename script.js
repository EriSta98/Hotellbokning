const form = document.getElementById("bookingForm");   /*Hämta bokningsformuläret*/
const confirmation = document.getElementById("confirmation");  /*Hämta bekräftelsemeddelandet*/ 
const title = document.getElementById("bookingTitle");  /*Hämta titeln ("boka ditt rum" i bokningsformuläret)*/

form.addEventListener("submit", function(event){ /*Lyssnar efter händelse (knapptryck) i bokningsformuläret*/

    event.preventDefault();  /*Förhindra att formuläret skickas eller att sidan laddas om (så att bekräftelsemeddelandet kan visas)*/

    form.style.display = "none";  /*Gömmer formuläret när man trycker på boka*/

    title.style.display = "none"; /*Gömmer "boka ditt rum" för renare UI*/

    confirmation.classList.remove("hidden"); /*När boka knappen trycks, göms hidden klassen och formuläret försvinner samt bekräftelsemeddelandet visas*/
})