$(document).ready(onReady);

// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;

let fungusHP = 100;
let playerAP = 100;

function onReady() {
    $('.arcane-sceptre').on('click', arcaneSceptreClick);
    $('.entangle').on('click', entangleClick);
    $('.dragon-blade').on('click', dragonBladeClick);
    $('.star-fire').on('click', starFireClick);

    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!
    
    
    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM
}


function arcaneSceptreClick() {
    console.log('arcane sceptre!');
    fungusHP = fungusHP -14;
    playerAP = playerAP -12;
    console.log('Fungus HP:',fungusHP);
    console.log('Player HP:',playerAP);
    //$(progress).html('value', fungusHP)
}

function entangleClick() {
    console.log('entangle!');
    fungusHP = fungusHP -9;
    playerAP = playerAP -23;
    console.log('Fungus HP:',fungusHP);
    console.log('Player HP:',playerAP);
}

function dragonBladeClick() {
    console.log('dragon blade!');
    fungusHP = fungusHP -47;
    playerAP = playerAP -38;
    console.log('Fungus HP:',fungusHP);
    console.log('Player HP:',playerAP);
}

function starFireClick() {
    console.log('star fire!');
    fungusHP = fungusHP -25;
    playerAP = playerAP -33;
    console.log('Fungus HP:',fungusHP);
    console.log('Player HP:',playerAP);
}