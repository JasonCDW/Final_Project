// let elCharText = document.getElementById('char-text');
// elCharText.innerHTML = 'JANE';

// let elSuperheroText = document.getElementById('superhero-text');
// elSuperheroText.innerHTML = 'SUPERHERO';

// let elClothText  = document.getElementById('clothes-text');
// elClothText.innerHTML = 'CLOTHING';

// let elColorSelect = document.getElementById('color-text');
// elColorSelect.innerHTML = 'COLOR';


// let elAnimalText = document.getElementById('animal-text');
// elAnimalText.innerHTML = 'ANIMAL';



function charText(){
    var x = document.getElementsByClassName('char-text');
    var i;
    for (i = 0; i<x.length; i++){
        x[i].innerHTML = 'JANE DOE';
    }
}
function superHeroText(){
    var x = document.getElementsByClassName('superhero-text');
    var i;
    for (i = 0; i<x.length; i++){
        x[i].innerHTML = 'SUPERHERO PERSON';
    }
}

function clothesText(){
    var x = document.getElementsByClassName('clothes-text');
    var i;
    for (i = 0; i<x.length; i++){
        x[i].innerHTML = 'GARMENT';
    }
}
function colorText(){
    var x = document.getElementsByClassName('color-text');
    var i;
    for (i = 0; i<x.length; i++){
        x[i].innerHTML = 'COLORTYPE';
    }
}
function animalText(){
    var x = document.getElementsByClassName('animal-text');
    var i;
    for (i = 0; i<x.length; i++){
        x[i].innerHTML = 'FLYINGN SQUIRRL';
    }
}

function numText(){
    var x = document.getElementsByClassName('number-text');
    var i;
    for (i = 0; i<x.length; i++){
        x[i].innerHTML = '5';
    }
}


function runStory(){
    charText();
    superHeroText();
    clothesText();
    colorText();
    animalText();
    numText();
}

runStory();

