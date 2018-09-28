let elStoryTitle = document.getElementById('story-path');
let elBody = document.getElementById('body');
let j = -1;
let k = 0;
let storyPath;
let bgimg;
function changeBackgroundImage(obj) {
    if (obj.id === 'romance'){
        storyPath = obj.id;
        console.log(storyPath);
        if (k === 0) {
            i++;
        };
        k++;
    } else if (obj.id === 'comedy') {
        storyPath = obj.id;
        console.log(storyPath);
        if (k === 0) {
            i++;
        };
        k++;
    } else if (obj.id === 'tragedy') {
        storyPath = obj.id;
        console.log(storyPath);
        if (k === 0) {
            i++;
        };
        k++;
    };
    let bgimgsrc = obj.filePath;
    bgimg = bgimgsrc;
    document.body.style.backgroundImage = 'url("'+bgimgsrc+'")';
    if(j===0){
        j++;
    };
    if(j === 1) {
        displayQuestions();
        displayImage(superheroArray);
    }; 
    if(i === 0){
        elStoryTitle.setAttribute('class', 'questions');
        elNameInputForm.setAttribute('class', 'shown');
    };
};
