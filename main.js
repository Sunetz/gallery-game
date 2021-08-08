const topPictures = [
    {url: './img/bear_1.png', id:1}, 
    {url: './img/lion_1.png', id:2},
    {url: './img/giraffe_1.png', id:3},
    {url: './img/pig_1.png', id:4}
],
    bottomPictures = [
    {url: './img/bear_2.png', id:1}, 
    {url: './img/lion_2.png', id:2},
    {url: './img/giraffe_2.png', id:3},
    {url: './img/pig_2.png', id: 4}
],
    btnPreviousTop = document.querySelector('#previous-top'),
    btnNextTop = document.querySelector('#next-top'),
    btnPreviousBottom = document.querySelector('#previous-bottom'),
    btnNextBottom = document.querySelector('#next-bottom'),
    btnSet = document.querySelector('#set'),
    picTop = document.querySelector('#pic-top'),
    picBottom = document.querySelector('#pic-bottom'),
    textResult = document.querySelector('.text-area'),
    audioWin = new Audio('./audio/win.mp3'),
    audioWrong = new Audio('./audio/cricket-sound.mp3');
    
let direction,
    current,
    randomTop,
    randomBottom,
    currentTop,
    currentBottom;

function startGame(){
    randomTop = topPictures[Math.floor(Math.random() * topPictures.length)];
    randomBottom = bottomPictures[Math.floor(Math.random() * bottomPictures.length)];
    picTop.style.backgroundImage = `url('${randomTop.url}')`;
    picBottom.style.backgroundImage = `url('${randomBottom.url}')`;
    currentTop = topPictures.indexOf(randomTop);    
    currentBottom = bottomPictures.indexOf(randomBottom);
    console.log(currentTop);
    console.log(currentBottom);
}

function changePicture(direction, arr, picture){    
    counter = 0;
    return () => {
        if(direction == 'next'){
            picture.style.backgroundImage = `url('${arr[counter].url}')`;
            counter += 1;
            if(counter == arr.length){
                changePicture(direction);
            }
            
        }
        else{            
            picture.style.backgroundImage = `url('${arr[counter].url}')`;
            
            counter -= 1;
            
            if(counter < 1){
                counter = arr.length;
                changePicture(direction);
                
            }
            
        }
        current = arr.indexOf(arr[counter]);
        console.log(current);
    }
}


function checkResult(id1, id2){
    if(id1 == id2){
        textResult.innerHTML = `You are so smart! <br> This music is for you. Enjoy!`
        audioWin.play();
    }
    else{
        console.log(id1, id2);
        textResult.innerHTML = 'You have created a very strange animal...';
        audioWrong.play();
    }
}

startGame();

btnPreviousTop.onclick = changePicture('previous', topPictures, picTop);
btnNextTop.onclick = changePicture('next', topPictures, picTop);
btnPreviousBottom.onclick = changePicture('previous', bottomPictures, picBottom);
btnNextBottom.onclick = changePicture('next', bottomPictures, picBottom);

btnSet.onclick = () =>{
    if(counter=0){
        topPictures[current] = currentTop;
        bottomPictures[current] = currentBottom;
    }
    
    }
    
    /*checkResult(topPictures[current].id, bottomPictures[current].id);*/

