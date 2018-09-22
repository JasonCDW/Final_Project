
let elCreateStoryImg = document.getElementById('createStory');
let elBody = document.getElementById('body');

let bgimg;
function changeBackgroundImage(obj) {
    let bgimgsrc = obj.filePath;
    bgimg = bgimgsrc;
    console.log(elCreateStoryImg);
    document.body.style.backgroundImage = 'url("'+bgimgsrc+'")';
    console.log('test')
    if (elCreateStoryImg) {
        console.log('test 1')
        elBody.removeChild(elCreateStoryImg);
        console.log(elCreateStoryImg)
        elCreateStoryImg = null;
        console.log(elCreateStoryImg)
    };
}
