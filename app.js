const ccForm = document.querySelector('#cc-form');

//card display variables
const frontOfCardNumber = document.querySelector('.front-of-card__number');
const frontOfCardName = document.querySelector('.front-of-card__name');
const frontOfCardExpYear = document.querySelector('.font-of-card__expire_year');
const frontOfCardExpMonth = document.querySelector('.front-of-card__expire_month');
const backOfCardCVC = document.querySelector('.back-of-card__cvc');


const ccNumInput = document.querySelector('#card-number');

// Calling form validation functions
ccForm.elements.name.addEventListener('input', formatCardName);
ccForm.elements.cardnumber.addEventListener('input', formatCardNum);
ccForm.elements.expmonth.addEventListener('input', formatEXPandCVC);
ccForm.elements.expyear.addEventListener('input', formatEXPandCVC);
ccForm.elements.cvc.addEventListener('input', formatEXPandCVC);


// Function to format the cardholder name
function formatCardName(e) {
    let value = e.target.value.replace(/[^A-Za-z\s]/g, '');
    // Update input value
    e.target.value = value;
}

// Function to format the credit card number
function formatCardNum(e) {
    // Remove non-numeric characters 
    let value = e.target.value.replace(/\D/g, '');

    // Add space after every 4 digits
    value = value.replace(/(\d{4})(?=\d)/g, '$1 ');

    // Update input value
    e.target.value = value;
}

// Function to format the EXP and CVC nums
function formatEXPandCVC(e) {
    // Remove non-numeric characters 
    let value = e.target.value.replace(/\D/g, '');
    // Update input value
    e.target.value = value;
}

// Make CC number display on front of card img while typing
ccForm.elements.cardnumber.addEventListener('input', function (e) {
    if (e.target.value.length > 0) {
        frontOfCardNumber.textContent = e.target.value;
    } else {
        frontOfCardNumber.textContent = '0000 0000 0000 0000'
    }
})

// Make cardholder name display of front of card img while typing
ccForm.elements.name.addEventListener('input', function (e) {
    if (e.target.value.length > 0) {
        frontOfCardName.textContent = e.target.value;
    } else {
        frontOfCardName.textContent = 'Jane Appleseed'
    }

})

// Make exp month appear while typing
ccForm.elements.expmonth.addEventListener('input', function (e) {
    if (e.target.value.length > 0) {
        frontOfCardExpMonth.textContent = e.target.value;
    } else {
        frontOfCardExpMonth.textContent = '00'
    }

})

// Make exp year appear while typing
ccForm.elements.expyear.addEventListener('input', function (e) {
    if (e.target.value.length > 0) {
        frontOfCardExpYear.textContent = e.target.value;
    } else {
        frontOfCardExpYear.textContent = '00'
    }
})

// Make CVC appear while typing
ccForm.elements.cvc.addEventListener('input', function (e) {
    if (e.target.value.length > 0) {
        backOfCardCVC.textContent = e.target.value;
    } else {
        backOfCardCVC.textContent = '000'
    }
})

ccForm.elements.cardnumber.addEventListener('input', formatCardNum);

ccForm.elements.expmonth.addEventListener('input', formatEXPandCVC);
ccForm.elements.expyear.addEventListener('input', formatEXPandCVC);
ccForm.elements.cvc.addEventListener('input', formatEXPandCVC);



// Function to format the credit card number
function formatCardNum(e) {
    // Remove non-numeric characters 
    let value = e.target.value.replace(/\D/g, '');

    // Add space after every 4 digits
    value = value.replace(/(\d{4})(?=\d)/g, '$1 ');

    // Update input value
    e.target.value = value;
}

// Function to format the EXP and CVC nums
function formatEXPandCVC(e) {
    // Remove non-numeric characters 
    let value = e.target.value.replace(/\D/g, '');
    e.target.value = value;
}