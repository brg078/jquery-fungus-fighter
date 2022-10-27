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

//  ARCANE SCEPTRE CLICK
function arcaneSceptreClick() {
    //console.log(fungusHP);
    if (fungusHP === 0) {
        console.log('you killed shroomie boi already!');
    } else if (playerAP <= 11) {
        console.log('game over!')
        $('.freaky-fungus').removeClass('walk');
        $('.freaky-fungus').addClass('jump');
    } else if (fungusHP > 0 && playerAP < 12) {
        console.log('OOM not enough AP!');
    } else if (fungusHP > 14 && playerAP >= 12) {
        console.log('arcane sceptre!');
        fungusHP = fungusHP -14;
        playerAP = playerAP -12;
        //console.log('Fungus HP:',fungusHP);
        //console.log('Player AP:',playerAP);
        $('.hp-text').text(`${fungusHP}`);
        $('.ap-text').text(`${playerAP}`);
    } else if (fungusHP <= 14 && playerAP >= 12) {
        console.log('arcane sceptre, KILL SHOT!');
        fungusHP = 0;
        playerAP = playerAP -12;
        //console.log('Fungus HP:',fungusHP);
        //console.log('Player AP:',playerAP);
        $('.hp-text').text(`${fungusHP}`);
        $('.ap-text').text(`${playerAP}`);
        $('.freaky-fungus').removeClass('walk');
        $('.freaky-fungus').addClass('dead');
        //$()
    } else if (playerAP <= 11) {
        console.log('game over!')
        $('.freaky-fungus-walk').html('.freaky-fungus-jump');
    }
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