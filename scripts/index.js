let i=0
var carrito = [];
var total = 0;


function showPaymentMethodPrompt() {
    const paymentMethod = prompt("Do you want to pay with credit or debit card?").toLowerCase();

    if (paymentMethod === "credit" || paymentMethod === "debit") {
        return paymentMethod;
    } else {
        return showPaymentMethodPrompt();
    }
}

function showInstallmentsPrompt() {
    const installments = prompt("How many installments would you like to pay in? (3, 6 or 9)");

    if (["3", "6", "9"].includes(installments)) {
        return installments;
    } else {
        return showInstallmentsPrompt();
    }
}

function payCart() {
    if (carrito.length === 0) {
        alert("The cart is empty!");
        return;
    }

    const paymentMethod = showPaymentMethodPrompt();

    let message = "Items in the cart:\n";
    carrito.forEach(item => {
        message += `- ${item.description} ($${item.price})\n`;
    });

    let totalMessage = `Total: $${total}`;

    if (paymentMethod === "credit") {
        const installments = showInstallmentsPrompt();
        message = `Congrats! You have selected to pay with credit card in ${installments} installments.\n${message}\n${totalMessage}`;
    } else {
        message = `Congrats! You have selected to pay with debit card.\n${message}\n${totalMessage}`;
    }

    alert(message);
}


document.addEventListener('DOMContentLoaded', function() {
    const buyButton = document.querySelector('.btn-primary');
  
    buyButton.addEventListener('click', function() {
      buyItem(100, 'In a hurry');
    });
  });
  
  function buyItem(price, description) {

    alert(`Do you want to buy for $${price}. the photo ${description}?`);

    //Algoritmo de condición, donde el carrito de compras realiza un descuento del 10% en la 3ra unidad, un 15% en la 6ta y un 20% en la 9na.

    console.log("Item select")
    i++;

    carrito.push({ description, price });
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