score = 0;
cross = true;

audio = new Audio('game_over.mp3');
document.onkeydown = function(e){
    console.log("key code is: ", e.keyCode)
    if(e.keyCode==38){
        dino = document.querySelector('.dino');
        dino.classList.add('animateDino');
        setTimeout(() => {
            dino.classList.remove('animateDino')
        }, 700);
    }
    if(e.keyCode==39){
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = dinoX + 112 + "px";
    }
    if(e.keyCode==37){
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = dinoX - 112 + "px";
    }
}

setInterval(() => {
    dino = document.querySelector('dino');
    gameOver = document.querySelector('.gameOver');
    obstacle = document.querySelector('.obstacle');
    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));
    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));
    offsetX = Math.abs(dx-ox);
    offsetY = Math.abs(dy-oy);
    if(offsetX < 73 && offsetY < 52){
        gameOver.innerHTML = "Game Over - Reload to play again";
        obstacle.classList.remove('obstacleAni');
        audio.play();
        setTimeout(() => {
            // isse audio pause ho jayega 1s baad
            audio.pause();
        }, 1000);
    }
    else if( offsetX<145 && cross){
        scorce+=1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.1;
            obstacle.style.animationDuration = newDur + 's';                         
        }, 500);
        // jese hi score badh raha hai toh sath mein speed obstacle ki increase karne ke liye animation ka duration kam karna hoga
        // parseFloat use karege yaha
    }
},10);

function updateScore(score){
    scoreCount.innerHTML = "Your score: " + score
}