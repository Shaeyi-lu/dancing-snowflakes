//Confirm password
var pass = document.getElementById("pass");
var confirmpass = document.getElementById("confirmpass");

console.log(pass, confirmpass);

function validatePass() {
    if (pass.value != confirmpass.value) {
        confirmpass.setCustomValidity("Passwords Don't Match");
    } else {
        confirmpass.setCustomValidity("");
    }
}
//price
var price = [];
price['0'] = 12.99
price['1'] = 9.25
price['2'] = 7.99

var ticketQuantity = [];
ticketQuantity['zero'] = 0
ticketQuantity['one'] = 1
ticketQuantity['two'] = 2
ticketQuantity['three'] = 3
ticketQuantity['four'] = 4
ticketQuantity['five'] = 5
ticketQuantity['six'] = 6
ticketQuantity['seven'] = 7
ticketQuantity['eight'] = 8
ticketQuantity['nine'] = 9
ticketQuantity['ten'] = 10

function quantityPrice() {
    var quantityPrice = [];
    var theForm = document.forms["form"];
    var selectedQuantity = theForm.elements["quantity"];
    selectedQuantity.forEach(element => {
        quantityPrice.push(ticketQuantity[element.value])
    });
    console.log(quantityPrice);
    return quantityPrice;
}

function totalPrice() {
    var totalPrice = 0
    var quantityArray = quantityPrice()
    for (var i = 0; i < 3; i++) {
        totalPrice = totalPrice + price[i] * quantityArray[i];
    }
    var tax = totalPrice * .13;
    var totalTaxed = totalPrice + tax;
    var tp = document.getElementById('totalPrice');
    tp.innerHTML = '$' + totalTaxed.toFixed(2)
    tp.style.display = 'block';
    return totalTaxed;
}

function checkQuantity() {
    var quantityArray = quantityPrice()
    if (!quantityArray[0] && !quantityArray[0] && !quantityArray[0]) {
        alert("Please enter a quantity!");
    }
}

function show(value) {
    document.getElementById("display1").style.display = "none"
    document.getElementById("display2").style.display = "none"
    document.getElementById("display3").style.display = "none"
    document.getElementById("display4").style.display = "none"
    document.getElementById("display5").style.display = "none"
    document.getElementById("display6").style.display = "none"
    document.getElementById("display7").style.display = "none"
    document.getElementById("display8").style.display = "none"
    document.getElementById("display9").style.display = "none"
    if (value == 1) {
        document.getElementById("display1").style.display = "block"
    }
    if (value == 2) {
        document.getElementById("display2").style.display = "block"
    }
    if (value == 3) {
        document.getElementById("display3").style.display = "block"
    }
    if (value == 4) {
        document.getElementById("display4").style.display = "block"
    }
    if (value == 5) {
        document.getElementById("display5").style.display = "block"
    }
    if (value == 6) {
        document.getElementById("display6").style.display = "block"
    }
    if (value == 7) {
        document.getElementById("display7").style.display = "block"
    }
    if (value == 8) {
        document.getElementById("display8").style.display = "block"
    }
    if (value == 9) {
        document.getElementById("display9").style.display = "block"
    }
}