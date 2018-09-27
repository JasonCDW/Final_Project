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
elNewStory = document.getElementById('createIcon');
elNewStory.addEventListener('click', newStory);
function newStory(event){
    localStorage.clear();
}


let getResponses = localStorage.getItem('storageResponseArray');
responseArray = JSON.parse(getResponses);

function charText(){
    var x = document.getElementsByClassName('char-text');
    var i;
    for (i = 0; i<x.length; i++){
        x[i].innerHTML = responseArray[0];
    }
}
function superHeroText(){
    var x = document.getElementsByClassName('superhero-text');
    var i;
    for (i = 0; i<x.length; i++){
        x[i].innerHTML = responseArray[1];
    }
}

function clothesText(){
    var x = document.getElementsByClassName('clothes-text');
    var i;
    for (i = 0; i<x.length; i++){
        x[i].innerHTML = responseArray[2];
    }
}
function colorText(){
    var x = document.getElementsByClassName('color-text');
    var i;
    for (i = 0; i<x.length; i++){
        x[i].innerHTML = responseArray[3];
    }
}
function animalText(){
    var x = document.getElementsByClassName('animal-text');
    var i;
    for (i = 0; i<x.length; i++){
        x[i].innerHTML = responseArray[4];
    }
}

function numText(){
    var x = document.getElementsByClassName('number-text');
    var i;
    for (i = 0; i<x.length; i++){
        x[i].innerHTML = responseArray[5];
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

