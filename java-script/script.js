let btnGenera = document.querySelector(".generate");

btnGenera.addEventListener("click", function() {
    let nameSurname = document.getElementById("name-surname").value;
    console.log("Benvenuto, " + nameSurname);

    let distance = document.getElementById("distance").value;
    console.log("La il tuo percorso è di " + distance + " km");

    let age = document.getElementById("age").value;
    let maggiorenne = document.querySelector(".maggiorenne").value;
    let minorenne = document.querySelector(".minorenne").value;
    let over65 = document.querySelector(".over-65").value;

    if (age = maggiorenne) {
        console.log("Sei maggiorenne");
    } else {
        if (age = minorenne) {
            console.log("Sei minorenne");
        } else {
            if (age = over65) {
                console.log("Sei un over65");
            }
        }
    }

    let ticket = document.querySelector(".your-ticket");
    ticket.className += " show";
});


let btnAnnulla = document.querySelector("cancel");

btnAnnulla.addEventListener("click", function() {

    let ticket = document.querySelector(".your-ticket");
    ticket.className = "";
});