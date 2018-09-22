//define array to hold user's responses
let responseArray = [];
let i = 0;

let elImageContainer = document.getElementById('image-container');
//let elCreateStoryImg = document.getElementById('createStory');

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
let Batman = new Image ('Batman','./images/superheroes/batman.jpg', 'Batman', 'superhero');
let Deadpool = new Image ('Deadpool', './images/superheroes/deadpool.jpg', 'Deadpool','superhero');
let Hulk = new Image ('Hulk', './images/superheroes/hulk.jpg', 'Hulk','superhero');
let Spiderman = new Image ('Spiderman', './images/superheroes/spiderman.jpg', 'Spiderman','superhero');
let Wolverine = new Image ('Wolverine', './images/superheroes/wolverine.jpg', 'Wolverine', 'superhero');


//instantiate new instances of object constructor for clothes
let Jacket1 = new Image ('jacket', './images/clothing/jacket_1.jpg', 'jacket','clothing');
let Hat = new Image ('baseball cap', './images/clothing/hat_1.jpg', 'cap', 'clothing');
let Shirt = new Image ('blue button-down', './images/clothing/shirt_1.jpg','shirt','clothing');
let Shirt2 = new Image ('white button-down', './images/clothing/shirt_2.jpg','shirt2', 'clothing');
let Sneaker = new Image ('sneaker', './images/clothing/shoe_1.jpg', 'sneaker','clothing');
let Watch = new Image ('watch', './images/clothing/watch_1.jpg', 'watch', 'clothing');
let Shoe = new Image ('dress shoe', './images/clothing/shoe_2.jpg', 'shoe','clothing');


//instantiate new instances of object constructor for story paths
let Romance = new Image ('romance', 'images/settings/romance_back.jpg', 'romance','storyPath');
let Tragedy = new Image ('tragedy','images/settings/tragedy_back.jpg', 'tragedy','storyPath');
let Comedy = new Image ('comedy', 'images/settings/comedy_back.jpg', 'comedy', 'storyPath');

//instantiate new instances of object constructor for colors
let Blue = new Image ('blue', './images/colors/blue.gif', 'blue','color');
let Orange = new Image ('orange', './images/colors/orange.gif', 'orange', 'color');
let Yellow = new Image ('yellow', './images/colors/yellow.gif', 'yellow', 'color');
let Red = new Image ('red', './images/colors/red.gif', 'red', 'color');
let Green = new Image ('green', './images/colors/green.gif', 'green', 'color');

//instantiate new instance of object constructor for exotic animals
let Cabra = new Image('cabra','./images/animals/cabra.jpg','cabra','animal')
let Cow = new Image('fluffy cow','./images/animals/FluffyCow.jpg','cow', 'animal')
let Mara = new Image('mara','./images/animals/Mara.jpg','mara', 'animal')
let Raccoon = new Image('raccoon','./images/animals/RaccoonDog.jpg', 'raccoon', 'animal' )

//declare variables and set objects to corresponding group array
let superheroArray = [Batman, Deadpool, Hulk, Spiderman, Wolverine];
let clothingArray = [Jacket1, Hat, Shirt, Shirt2, Sneaker, Watch, Shoe];
let storyPathArray = [Romance, Tragedy, Comedy];
let colorArray = [Blue, Orange, Yellow, Red, Green];
let animalArray = [Cabra, Cow, Mara, Raccoon];
let numberArray = [];

let ArrArray = [superheroArray, clothingArray, colorArray, animalArray];
//Change HTML Background Functions



//defining a function to randomize all the arrays except numberArray
function randomImage (arr) {
    let randomNumber = Math.floor(Math.random() * arr.length);
    let randomObject = arr[randomNumber];
    return randomObject;
};


//define a function to display in html the previously clicked items for the user to view reduced in size (stretch goal)
let displayImage = function(arr){
    elImageContainer.innerHTML = '';
    let imageObject = randomImage(arr);
    for (let i = 0; i < 3; i++){
        // console.log(imageObject);
        if(i === 0){
            firstImage = imageObject;
            // console.log(firstImage);
        }else if (i === 1){
            while (imageObject.id === firstImage.id) {
                imageObject = randomImage(arr);
            }
            secondImage = imageObject;
            // console.log(secondImage);
        }else {
            while (imageObject.id === firstImage.id || imageObject.id === secondImage.id) {
                imageObject = randomImage(arr);
            }    
            thirdImage = imageObject
        }
        let elImage = document.createElement('img');
        elImageContainer.appendChild(elImage);
        elImage.setAttribute('id', imageObject.id);
        elImage.src = imageObject.filePath;
        elImage.addEventListener('click', selectImg)
        }

}


//define a fuction for the event handler, needs to store the item chosen to responseArray

displayImage(superheroArray);
function selectImg(event){
    responseArray.push(event.target.id);
    i++;
    if (i < ArrArray.length) {
        displayImage(ArrArray[i]);
    } else {
        window.location.href = "story.html";
    };
};
