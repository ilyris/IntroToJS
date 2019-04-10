/* 7-5 js

Author : Dylan Sieren
Date: 4-08/2019

*/



"use strict";
var delivInfo = {};
var delivSummary = document.getElementById('deliverTo');
var foodInfo = {};
var foodSummary = document.getElementById('order');

function processDeliveryInfo() {
    var props;
    delivInfo.name = document.getElementById('nameinput').value;
    delivInfo.addr = document.getElementById('addrinput').value;
    delivInfo.city = document.getElementById('cityinput').value;
    delivInfo.email = document.getElementById('emailinput').value;
    delivInfo.phone = document.getElementById('phoneinput').value;

    for(props in delivInfo) {
        console.log(props);
        delivSummary.innerHTML += "<p>" + delivInfo[props] + "</p>";
        delivSummary.style.display = "block";
    }
}

function previewOrder() {
    processDeliveryInfo();
    processFood();
    document.querySelector('section').style.display = "block";
}

function processFood() {
    var prop;
    var crustOpt = document.getElementsByName('crust');
    var instr = document.getElementById('instructions');
    var toppingBoxes = document.getElementsByName('toppings');
    var toppings = 0;


    if( crustOpt[0].checked) {
        foodInfo.crust = crustOpt[0].value;
        console.log(foodInfo.crust);
    } else {
        foodInfo.crust = crustOpt[1].value;
    }

    foodInfo.size = document.getElementById('size').value;

    for(var i = 0; i < toppingBoxes.length; i++) {
        if(toppingBoxes[i].checked) {
            toppings++;
            console.log(toppingBoxes);
            foodInfo.topping = toppingBoxes[i].value;
        }
    }
    if(instr.value) {
        foodInfo.instructions = instr.value;
    }
    foodSummary.innerHTML += '<p><span>Crust</span>:' + foodInfo.crust +'</p>';
    foodSummary.innerHTML += '<p><span>Size</span>:' + foodInfo.size +'</p>';
    foodSummary.innerHTML += '<p><span>Topping(s)</span>:' + foodInfo.toppings +'</p>';
    foodSummary.innerHTML += "<ul>";
    for( var i = 1; i < 6; i++) {
        if(foodInfo['topping' + i]) {
            foodSummary.innerHTML += '<li>' + foodInfo["topping" + i] + "</li>";
        }
    } 
    foodSummary.innerHTML += "</ul>";
    foodSummary.innerHTML += '<p><span>Instructions</span>:' + foodInfo.instructions +'</p>';
    document.getElementById("order").style.display ="block";
}

var submitButton = document.getElementById('previewBtn');
if(submitButton.addEventListener) {
   submitButton.addEventListener('click', previewOrder, false);
} else if (submitButton.attachEvent) {
   submitButton.attachEvent('onclick', previewOrder);
}
// if(window.addEventListener) {
//     window.addEventListener('load', createEventListener, false);
//  } else if (window.attachEvent) {
//     window.attachEvent('onload', createEventListener);
// }