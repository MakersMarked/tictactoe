
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

    const players = (name, mark, turn) => {
        return {name, mark, turn}
    }
    const player1 = players('Jordan', 'X', true);
    const player2 = players('Kaila', 'O', false);

    const turns = (() => {
        const squares = document.querySelectorAll('.selection');
            squares.forEach((square)=> {
                square.addEventListener('click', ()=>{
                    if (player1.turn == true && square.textContent == '') {
                        update(square.id, player1.mark)
                        player1.turn = false;
                        player2.turn = true;
                    }
                    else if (player2.turn == true && square.textContent == '') {
                        update(square.id, player2.mark);
                        player1.turn = true;
                        player2.turn = false;
                        console.log(GameBoard.getGameBoard())
                    };
                })
            })
    })();


    return {update, render, getGameBoard}
})();
