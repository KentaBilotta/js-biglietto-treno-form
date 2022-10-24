let btnGenera = document.querySelector(".generate");
let btnAnnulla = document.querySelector(".cancel");
let ticket = document.querySelector(".your-ticket");


btnGenera.addEventListener("click", function() {
    let nameSurname = document.getElementById("name-surname").value;
    console.log("Benvenuto, " + nameSurname);

    let distance = document.getElementById("distance").value;
    console.log("La il tuo percorso è di " + distance + " km");

    let age = document.getElementById("age").value;
    let maggiorenne = document.querySelector(".maggiorenne").value;
    let minorenne = document.querySelector(".minorenne").value;
    let over65 = document.querySelector(".over-65").value;

    let total = distance * 0.21;
    let sconto20 = total - ((total * 20) / 100);
    let sconto40 = total - ((total * 40) / 100);

    if (age === maggiorenne) {
        console.log("Sei maggiorenne");
        document.querySelector(".prezzo-finale").innerHTML = total + "&euro;";
        document.querySelector(".ticket-type").innerHTML = "Biglietto Standard";
    } else {
        if (age === minorenne) {
            console.log("Sei minorenne");
            document.querySelector(".prezzo-finale").innerHTML = sconto20 + "&euro;";
            document.querySelector(".ticket-type").innerHTML = "Biglietto Minore";
        } else {
            if (age === over65) {
                console.log("Sei un over 65");
                document.querySelector(".prezzo-finale").innerHTML = sconto40 + "&euro;";
                document.querySelector(".ticket-type").innerHTML = "Biglietto Over";
            }
        }
    }

    total = parseFloat(total.toFixed(2));
    sconto20 = parseFloat(sconto20.toFixed(2));
    sconto40 = parseFloat(sconto40.toFixed(2));

    document.querySelector(".pass-name").innerHTML = nameSurname;
    document.querySelector(".carrozza").innerHTML = Math.floor(Math.random() * (10 - 1 + 1) ) + 1;
    

    ticket.classList.add("show");
});

btnAnnulla.addEventListener("click", function() {
    ticket.classList.remove("show");
});
