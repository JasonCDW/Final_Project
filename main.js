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
let Romance = new Image ('romance', 'romance_back.jpg', 'romance','storyPath');
let Tragedy = new Image ('tragedy','tragedy_back.jpg', 'tragedy','storyPath');
let Comedy = new Image ('comedy', 'comedy_back.jpg', 'comedy', 'storyPath');

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

