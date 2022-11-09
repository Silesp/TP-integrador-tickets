let btnresumen = document.querySelector(".btnresumen");
btnresumen.addEventListener ("click", ticketsprecio);

let btnborrar = document.querySelector(".btnborrar");
btnborrar.addEventListener ("click", borrarOutput);

let ticketsquantity = document.querySelector("#ticketsquantity");

let ticketscategory = document.querySelector("#ticketscategory");


let Student = document.querySelector (".estudiante");
let trainee = document.querySelector (".trainee");
let junior = document.querySelector (".junior");


let nombre = document.querySelector("#nombre");
let Apellido = document.querySelector("#Apellido");
let email  = document.querySelector("#email");


function ticketsprecio(evento) {
    console.log(evento);
    evento.preventDefault ();

     let ticketsquantity = document.querySelector("#ticketsquantity");

    if(Number(ticketsquantity.value)) {
        let ticketscategory = document.querySelector("#ticketscategory");
        let totalPayment;

        switch (ticketscategory.value) {
            case "Estudiante": {
                totalPayment = 200 * ticketsquantity.value * 0.2;
                break;
            }
            case "Trainee" : {
                totalPayment = 200 * ticketsquantity.value * 0.5;
                break;
            }
            case "Junior" : {
                totalPayment = 200 * ticketsquantity.value *0.85;
                break;
            }
        }
        document.querySelector(".ticketsOutput").textContent = `Total a pagar: $${totalPayment}`;
        let outputNode = document.querySelector(".ticketsOutput");
          
    } else {
    document.querySelector("#ticketsquantity").style.border = "2px solid red";
    ticketsquantity.value = "";
    ticketsquantity.placeholder = "Ingrese una cantidad válida";
    alert("Ingrese una cantidad válida");
}
}

function borrarOutput() {

    document.querySelector(".ticketsOutput").textContent = "Total a pagar:";
    
    let form = document.querySelector(".ticketsOutput");
    for (i = 0; i < 4; i++) {
        document.querySelector("." + form[i].className).style.border = "1px solid var(--gray-300)";
    }
    }
    
