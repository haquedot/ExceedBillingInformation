function updateCardNumber() {
    var cardNumber = document.getElementById("cardNumber").value;
    if (cardNumber <= 9999999999999999) {
        document.getElementById("cardNumberOut").textContent = cardNumber;
    }
}

function updateMonth() {
    var month = document.getElementById("month").value;
    if (month <= 12) {
        document.getElementById("monthOut").textContent = month;
    }
}

function updateYear() {
    var year = document.getElementById("year").value;

    if (year <= 9999) {
        document.getElementById("yearOut").textContent = year;
    }
}

function updateSecurity() {
    var cvv = document.getElementById("security").value;

    if (cvv <= 999) {
        document.getElementById("cvvOut").textContent = cvv;
    }
}

function updateCardLogo() {
    var selectedCard = document.getElementById("cardType").value;
    var cardLogoElement = document.getElementById("cardLogo");

    if (selectedCard === "mastercard") {
        cardLogoElement.src = "mastercard.svg";
    } else if (selectedCard === "visa") {
        cardLogoElement.src = "visa.svg";
    } else {
        cardLogoElement.src = "";
    }
}