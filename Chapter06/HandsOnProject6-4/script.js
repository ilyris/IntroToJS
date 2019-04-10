// 6-4
// DS
// 4/1/19

function removeSelectDefault() {
    var selectBox = document.getElementById('size');
    selectBox.selectedIndex = -1;
    selectBox.style.boxShadow = "none";
}
function setUpPage() {
    removeSelectDefault();
    generatePlaceholder();
}

function zeroPlaceholder() {
    var instrBox = document.getElementById('instructions');
    instrBox.style.color ="black";
    if(instrBox.value === instrBox.placeholder) {
        instrBox.value =""
    }
}

function checkPlaceholder() {
    var instrBox = document.getElementById("instructions");
    if(instrBox.value === "")  {
        instrBox.style.color ="rgb(178,184,183)";
        instrBox.value = instrBox.placeholder;
    }
}

function generatePlaceholder() {
    if(!Modernizr.input.placeholder) {
        var instrBox = document.getElementById('instructions');
        instrBox.value = instrBox.placeholder;
        instrBox.style.color = "rgb(178,184,183)";
        if(instrBox.addEventListener) {
            instrBox.addEventListener('focus', zeroPlaceholder, false);
            instrBox.addEventListener('blue', checkPlaceholder, false);
        } else if(instrBox.attachEvent) {
            instrBox.attachEvent('onfocus', zeroPlaceholder);
            instrBox.attachEvent('onblur', checkPlaceholder);
        }
    }
}

if(window.addEventListener) {
    window.addEventListener('load', setUpPage, false);
} else if (window.attachEvent) {
    window.attachEvent('onload', setUpPage);
}