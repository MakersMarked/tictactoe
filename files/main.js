
'use strict'

const GameBoard = (() => {
    let gameBoard = ['', '', '', '', '', '', '', '', ''];
    const gameList = document.getElementById('game');
        gameBoard.forEach((square, index) => {
            const space = document.createElement('div');
            space.classList.add('selection');
            space.setAttribute('id',`${index}`);
            space.textContent = square;
            gameList.appendChild(space);
        });
        const squares = document.querySelectorAll('.selection');
            squares.forEach((square, index)=> {
                square.addEventListener('click', ()=>{
                    //  update square
                    update(index,'0')//(index, player marker)
                })
            })
    const render = () => {
        gameBoard.forEach((square, index)=>{
            document.getElementById(`${index}`).textContent = square;
        })
    }
    const update = (index, value) => {
        gameBoard[index]=value;
        render()
    }
    const getGameBoard = () => gameBoard;

    return {update, render, getGameBoard}
})();
// const david = players('Kaila', 'O');

// console.log(jordan.select());





