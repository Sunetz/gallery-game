const btnPreviousTop = document.querySelector('#previous-top'),
    btnNextTop = document.querySelector('#next-top'),
    btnPreviousBottom = document.querySelector('#previous-bottom'),
    btnNextBottom = document.querySelector('#next-bottom'),
    btnSet = document.querySelector('#set'),
    textResult = document.querySelector('.text-area'),
    audioWrong = new Audio('./audio/cricket-sound.mp3'),
    audioSong = document.querySelector('#win-song');

let topPicCount  = document.querySelectorAll(".picture-top").length, //================Число дивов с классом .picture-top
    bottomPicCount  = document.querySelectorAll(".picture-bottom").length //==========Число дивов с классом .picture-bottom
    indexTop = Math.floor(Math.random() * topPicCount), //========================================Рандомное число из кол-ва верхних картинок
    indexBottom = Math.floor(Math.random() * bottomPicCount);//===================================Рандомное число из кол-ва нижних картинок


//======Задаем рандомные первые картинки сверху и внизу========//

function startGame(){
    showTopImages(indexTop);
    showBottomImages(indexBottom);
}

//======Функция для перелистывания картинок====================//

function nextTopImage(n){
    showTopImages(indexTop += n);
}

function nextBottomImage(n){
    showBottomImages(indexBottom += n);
}

//======Функция показа картинок================================//
function showTopImages(n){
    let i;
    let topImages = document.querySelectorAll('.picture-top')
    if (n > topImages.length){
        indexTop = 1;
    }
    if(n < 1){
        indexTop = topImages.length;
    }
    for (i = 0; i < topImages.length; i++){
        topImages[i].style.display = 'none';
    }
    topImages[indexTop-1 ].style.display = 'block';
    
}

function showBottomImages(n){
    let i;
    let bottomImages = document.querySelectorAll('.picture-bottom');
    if (n > bottomImages.length){
        indexBottom = 1;
    }
    if(n < 1){
        indexBottom = bottomImages.length;
    }
    for (i = 0; i < bottomImages.length; i++){
        bottomImages[i].style.display = 'none';
    }
    bottomImages[indexBottom-1].style.display = 'block';
    
    
}

startGame();

btnPreviousTop.onclick =()=>{
    nextTopImage(-1);
}
btnNextTop.onclick =()=>{
    nextTopImage(1);
}
btnPreviousBottom.onclick = () =>{
    nextBottomImage(-1);
}
btnNextBottom.onclick = ()=>{
    nextBottomImage(1);
}

btnSet.onclick = () =>{
    audioSong.pause();
    audioSong.style.display = 'none';
    console.log(indexBottom, indexTop);
    if(indexTop == indexBottom){
        
        textResult.innerHTML = `You win!<br>This song is for you.<br>Enjoy!`;
        audioSong.style.display = 'block';
        audioSong.play();
        
    }
    else{
        
        audioWrong.play();
        textResult.innerHTML = `You have created a very creepy animal.<br>Try it one more time if you want.`
    }

}
