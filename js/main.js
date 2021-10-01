let container = document.querySelector('.container');
let dino = document.querySelector('.dino');
let block = document.querySelector('.block');
let road = document.querySelector('.road');
let score = document.querySelector('.score')
let gameOver = document.querySelector('.gameOver')


let interval = null;
let playerScore = 0;

let scoreCounter = () => {
    playerScore++;
    score.innerHTML= `Score <b>${playerScore}</b>`;
}

// interval = setInterval(scoreCounter, 200)
window.addEventListener("keydown", (start) => {
    if(start.code == "Space"){
        gameOver.style.display = "none";
        block.classList.add("blockActive");
        road.firstElementChild.style.animation = "roadAnimate 1.5s linear infinite";

        //score
        let playerScore = 0;
        interval = setInterval(scoreCounter, 200)
    }
})
window.addEventListener("keydown", (e)=> {
    if(e.key == "ArrowUp")
        if(dino.classList != "dinoActive"){
            dino.classList.add("dinoActive");

            // remove class after 0.5 second
            setTimeout(() => {
                dino.classList.remove("dinoActive");
            }, 500);
        }
})

let result = setInterval(() => {
    let dinoBottom = parseInt(getComputedStyle(dino).getPropertyValue("bottom"));
    let blockLeft = parseInt(getComputedStyle(block).getPropertyValue("left"));

    if(dinoBottom <= 90 && blockLeft >= 20 && blockLeft <= 145){
        
        gameOver.style.display = "block"
        block.classList.remove("blockActive");
        road.firstElementChild.style.animation = "none";
        clearInterval(interval)
        playerScore = 0;

    }
}, 10);






