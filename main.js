//define array to hold user's responses
let responseArray = [];

let elImageContainer = document.getElementById('image-container');

let firstImage;
let secondImage;
let thirdImage;

//create an object constructor
let Image = function(name, filePath, id, group){
    this.name = name;
    this.filePath = filePath;
    this.id = id;
    this.group = group;
};

//instantiate new instances of Image constructor
let Batman = new Image ('Batman','batman.jpg', 'batman', 'superhero');
let Deadpool = new Image ('Deadpool', 'deadpool.jpg', 'deadpool','superhero');
let Hulk = new Image ('Hulk', 'hulk.jpg', 'hulk','superhero');
let Spiderman = new Image ('Spiderman', 'spiderman.jpg', 'spiderman','superhero');
let Wolverine = new Image ('Wolverine', 'wolverine.jpg', 'wolverine', 'superhero');


//instantiate new instances of object constructor for clothes
let Jacket1 = new Image ('jacket', 'jacket_1.jpg', 'jacket','clothing');
let Hat = new Image ('baseball cap', 'jacket_1.jpg', 'cap', 'clothing');
let Shirt = new Image ('blue button-down', 'shirt_1.jpg','shirt','clothing');
let Shirt2 = new Image ('white button-down', 'shirt_2.jpg','shirt2', 'clothing');
let Sneaker = new Image ('sneaker', 'shoe_1.jpg', 'sneaker','clothing');
let Watch = new Image ('watch', 'watch_1.jpg', 'watch', 'clothing');
let Shoe = new Image ('dress shoe', 'shoe_2.jpg', 'shoe','clothing');

//instantiate new instances of object constructor for story paths
let Romance = new Image ('romance', 'images/settings/romance_back.jpg', 'romance','storyPath');
let Tragedy = new Image ('tragedy','images/settings/tragedy_back.jpg', 'tragedy','storyPath');
let Comedy = new Image ('comedy', 'images/settings/comedy_back.jpg', 'comedy', 'storyPath');

//instantiate new instances of object constructor for colors
let Blue = new Image ('blue', 'blue.gif', 'blue','color');
let Orange = new Image ('orange', 'orange.gif', 'orange', 'color');
let Yellow = new Image ('yellow', 'yellow.gif', 'yellow', 'color');
let Red = new Image ('red', 'red.gif', 'red', 'color');
let Green = new Image ('green', 'green.gif', 'green', 'color');

//instantiate new instance of object constructor for exotic animals
let Cabra = new Image('cabra','cabra.jpg','cabra','animal')
let Cow = new Image('fluffy cow','FluffyCow.jpg','cow', 'animal')
let Mara = new Image('mara','Mara.jpg','mara', 'animal')
let Raccoon = new Image('raccoon','Raccoon.jpg', 'raccoon', 'animal' )

//declare variables and set objects to corresponding group array
let superheroArray = [Batman, Deadpool, Hulk, Spiderman, Wolverine];
let clothingArray = [Jacket1, Hat, Shirt, Shirt2, Sneaker, Watch, Shoe];
let storyPathArray = [Romance, Tragedy, Comedy];
let colorArray = [Blue, Orange, Yellow, Red, Green];
let animalArray = [Cabra, Cow, Mara, Raccoon];
let numberArray = [];

//defining a function to randomize all the arrays except numberArray

function randomImage (arr) {
    let randomNumber = Math.floor(Math.random() * arr.length);
    let randomObject = arr[randomNumber];
    return randomObject;
}
////////////

// let randomSuperHeroImage = function(){
//     let randomHeroNumber = Math.floor(Math.random()* superheroArray.length);
//     let superHeroIndex = superheroArray[randomHeroNumber];
//     return superHeroIndex;
// }
// let randomClothingImage = function(){
//     let randomClothingNumber = Math.floor(Math.random()* clothingArray.length);
//     let clothingIndex = clothingArray[randomClothingNumber];
//     return clothingIndex;
// }
// let randomColorImage = function(){
//     let randomColorNumber = Math.floor(Math.random()*colorArray.length);
//     let colorIndex = colorArray[randomColorNumber];
//     return colorIndex;
// }
// let randomAnimalImage = function(){
//     let randomAnimalNumber = Math.floor(Math.random()* animalArray);
//     let animalIndex = animalArray[randomAnimalNumber];
//     return animalIndex;
// }

/////////////
//define a function to display in html the previously clicked items for the user to view reduced in size (stretch goal)
let displayImage = function(){
    elImageContainer.innerHTML = '';
    let imageObject = randomImage(superheroArray);
    for (let i = 0; i < 3; i++){
        console.log(imageObject);
        if(i === 0){
            firstImage = imageObject;
            console.log(firstImage);
        }else if (i === 1){
            while (imageObject.id === firstImage.id) {
                imageObject = randomImage(superheroArray);
            }
            secondImage = imageObject;
            console.log(secondImage);
        }else {
            while (imageObject.id === firstImage.id) {
                imageObject = randomImage(superheroArray);
            }    
            thirdImage = imageObject
        }
        }
        let elImage = document.createElement('img');
        elImageContainer.appendChild(elImage);
        elImage.setAttribute('id', imageObject.id);
        elImage.src = imageObject.filePath;

}


//define a fuction for the event handler, needs to store the item chosen to responseArray


displayImage();