// + Button Functionality

//Add this for every single detail category

const quantityTxt = document.querySelector('#quanText');
let quantityBtn = document.querySelector('#quantity');
quantityBtn.addEventListener('click', clickedInfo);


function clickedInfo() {
    // 1) Turn "+" sign into "-" sign (or vice-versa)
    if (quantityBtn.innerHTML === '+') {
        quantityBtn.innerHTML = '-'

        // 2) Hide/Unhide text area
        quanText.style.visibility = '';
    }
    else {
        quantityBtn.innerHTML = '+';

        // 2) Hide/Unhide text area
        quanText.style.visibility = 'hidden';
    }

}