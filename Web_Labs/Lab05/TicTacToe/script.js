console.log("Welcome to Tic Tac Toe")
let music = new Audio("./res/music.mp3")
let audioTurn = new Audio("./res/ting.mp3")
let gameover = new Audio("./res/gameover.mp3")
let turn = "X"
let isgameover = false;
let reset = document.getElementById("reset");
let boxes = document.querySelectorAll('.box');
let info = document.querySelector('.info');
let img = document.querySelector('.imgbox').querySelector('img');





// Implementing Logic
boxes.forEach((element) => {
    element.addEventListener('click', () => {
        let box = element.querySelector('.boxtext');
        box.innerText = turn;
        turn = checkTurn();
        document.querySelector('.info').innerText
            = "Turn for " + turn;

        // checkForWin();
        checkWin();


    })

})

function checkWin(){
    let boxtext = document.querySelectorAll('.boxtext');
    boxtext.forEach(e => {
        // console.log(boxtext[e].innerText)

        // Horizontal Row Logic
        if ( (boxtext[0].innerText === boxtext[1].innerText) &&
            (boxtext[1].innerText === boxtext[2].innerText) &&
            (boxtext[1].innerText !== '') )
        {
            info.innerText = boxtext[0].innerText + " Won";
            img.style.width = '80px';
        }

        if ( (boxtext[3].innerText === boxtext[4].innerText) &&
            (boxtext[4].innerText === boxtext[5].innerText) &&
            (boxtext[3].innerText !== '') )
        {
            info.innerText = boxtext[3].innerText + " Won";
            img.style.width = '80px';
        }

        if ( (boxtext[6].innerText === boxtext[7].innerText) &&
            (boxtext[7].innerText === boxtext[8].innerText) &&
            (boxtext[6].innerText !== '') )
        {
            info.innerText = boxtext[3].innerText + " Won";
            img.style.width = '80px';
        }


        // Vertical Columns Logic
        if ( (boxtext[0].innerText === boxtext[3].innerText) &&
            (boxtext[3].innerText === boxtext[6].innerText) &&
            (boxtext[6].innerText !== '') )
        {
            info.innerText = boxtext[3].innerText + " Won";
            img.style.width = '80px';
        }

        if ( (boxtext[1].innerText === boxtext[4].innerText) &&
            (boxtext[4].innerText === boxtext[7].innerText) &&
            (boxtext[7].innerText !== '') )
        {
            info.innerText = boxtext[4].innerText + " Won";
            img.style.width = '80px';
        }

        if ( (boxtext[2].innerText === boxtext[5].innerText) &&
            (boxtext[5].innerText === boxtext[8].innerText) &&
            (boxtext[8].innerText !== '') )
        {
            info.innerText = boxtext[8].innerText + " Won";
            img.style.width = '80px';
        }

        // Diagonal Logic
        if ( (boxtext[0].innerText === boxtext[4].innerText) &&
            (boxtext[4].innerText === boxtext[8].innerText) &&
            (boxtext[8].innerText !== '') )
        {
            info.innerText = boxtext[8].innerText + " Won";
            img.style.width = '80px';
        }

        if ( (boxtext[2].innerText === boxtext[4].innerText) &&
            (boxtext[4].innerText === boxtext[6].innerText) &&
            (boxtext[4].innerText !== '') )
        {
            info.innerText = boxtext[4].innerText + " Won";
            img.style.width = '80px';
        }


    })
}


reset.addEventListener('click', resetAll);
// Reset Button Functionality
function resetAll(){
    boxes.forEach((element) => {
        let boxtext = element.querySelector('.boxtext');
        boxtext.innerText = '';
    })
    turn = 'X';
    img.style.width = '0px';
    info.innerText = "Turn for " + turn;
}


// Check Turn
function checkTurn(){
    return turn === 'X' ? '0' : 'X';
}




