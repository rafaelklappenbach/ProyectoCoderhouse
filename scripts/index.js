let i=0
var carrito = [];
var total = 0;
//Algoritmo de condición, donde el carrito de compras realiza un descuento del 10% en la 3ra unidad, un 15% en la 6ta y un 20% en la 9na.

function buyItem(price, title){
    console.log("Item select")
    i++;

    carrito.push({ title, price });
    total += price;
    
        
    switch(i){
        case 3: console.log("You have 10% of discount!")
        break;
        case 6: console.log("You have 15% of discount!")
        break;
        case 9: console.log("You have 20% of discount!")
        break;
        default: console.log("No discount applied!");
    }

    console.log("Your cart", carrito);
    console.log("All your items:", total);
}

//Algoritmo de ciclo, donde al hacer click en "Pay your cart" la página te pregunta método de pago y cuotas en caso ed corresponder.

function payCart() {
    let paymentMethod = prompt("Do you want to pay with credit or debit card?").toLowerCase();

    while (paymentMethod !== "credit" && paymentMethod !== "debit") {
        paymentMethod = prompt("Invalid option. Please select 'debit' or 'credit'.").toLowerCase();
    }

    if (paymentMethod === "credit") {
        let installments = prompt("How many installments would you like to pay in? (3, 6 o 9)");

        while (installments !== "3" && installments !== "6" && installments !== "9") {
            installments = prompt("Invalid option. Please select '3', '6' o '9'");
        }

        console.log("Congrats! You have selected to pay with credit card in", installments, "installments. The final amount is", total);
    } else {
        console.log("Congrats! You have selected to pay with credit card. The final amount is", total);
    }
}


