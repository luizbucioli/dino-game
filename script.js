const dino = document.querySelector('.dino');
const background = document.querySelector('.background');
var isJumping = false;
var position = 0;

function handleKeyUp(event){
    if(event.keyCode === 32){
        if(!isJumping){
       jump();
        }
    }
}
function jump(){

    isJumping = true;

    let upInterval = setInterval(() => {
        if(position >= 15){
            clearInterval(upInterval);

            //Descendo
            let downInterval = setInterval(() => {
                if(position <= 0){
                    clearInterval(downInterval);
                    isJumping = false;
                }
                else{
                    position -=2;
                    dino.style.bottom = position + 'vh';
                }
            }, 20);
        }
        else{
            //Subindo
            position +=2;
            dino.style.bottom = position + 'vh';
        }
    }, 20);
};

function createCactus(){
    const cactus = document.createElement('div')
    let cactusPosition = 52.083;
    let randomTime = Math.floor(Math.random() * 6000)

    cactus.classList.add('cactus');
    cactus.style.left = 52.083 + 'vw';
    background.appendChild(cactus);

    let leftInterval = setInterval(() => {
        if(cactusPosition < -3.125){
            clearInterval(leftInterval)
            background.removeChild(cactus);
        }else if (cactusPosition > 0 && cactusPosition < 3.125 && position < 3.125){
            //Game Over
            clearInterval(leftInterval);
            document.body.innerHTML = '<h1 class="container__game-over">Fim de jogo</h1>';
        } else {
            cactusPosition -= 0.521;
            cactus.style.left = cactusPosition + 'vw';
        }

    }, 20)

    setTimeout(createCactus, randomTime + 500);

};


createCactus();
document.addEventListener('keyup', handleKeyUp);