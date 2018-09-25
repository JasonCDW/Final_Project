
// let elCreateStoryImg = document.getElementById('createStory');
let elBody = document.getElementById('body');
let j = 0
let storyPath;
let bgimg;
function changeBackgroundImage(obj) {
    if (obj.id === 'romance'){
        storyPath = obj.id;
        console.log(storyPath);
    } else if (obj.id === 'comedy') {
        storyPath = obj.id;
        console.log(storyPath);
    } else if (obj.id === 'tragedy') {
        storyPath = obj.id;
        console.log(storyPath);
    };
    let bgimgsrc = obj.filePath;
    bgimg = bgimgsrc;
    // console.log(elCreateStoryImg);
    document.body.style.backgroundImage = 'url("'+bgimgsrc+'")';
    j++;
    if(j === 1) {
        displayImage(superheroArray);
    };
    // if (elCreateStoryImg) {
    //     console.log('test 1')
    //     elBody.removeChild(elCreateStoryImg);
    //     console.log(elCreateStoryImg)
    //     elCreateStoryImg = null;
    //     console.log(elCreateStoryImg)
    // };
};
