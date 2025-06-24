//gameboard module IIFE
//This module will manage the board state.
//It will provide methods to reset the board, get the current state of the board, set a cell, get a cell, and check if the board is full.
const gameBoard = ( () =>{
    const size = 3;
    let board = Array(size).fill().map( () => Array(size).fill(null));

    const reset = () => Array(size).fill().map( () => Array(size).fill(null));

    const getCell = (row, col) => board[row][col];

    const setCell = (row, cell, marker) => {
        if (board[row][cell] === null) {
            board[row][cell] = marker;
            return true;
        }
        return false;
        
    }

    const isFull = () => board.every(row => row.every(cell => cell !== null));

    const getBoard = () => board.map(row => [...row]);
    
    return {reset, getCell, setCell, isFull, getBoard};
}) ();

//player factory function
const createPlayer = (name, marker) => {
    return {name, marker, wins};
}

//display controller module IIFE
//This module will handle the UI updates and interactions.
const displayController = (() => {})();

//game controller module IIFE
//This module will manage the game logic and interactions between the game board and players.
//It will also check for a winner and update the display accordingly.
//It will also handle the game flow, such as switching turns and checking for a win or draw.
const gameController = ( () => {
    const players = [
        createPlayer("Player 1", "X"),
        createPlayer("Player 2", "O")
    ];

    let currentPlayerIndex = 0;

    const getCurrentPlayer = () => players[currentPlayerIndex];

    const switchPlayer = () => {
        currentPlayerIndex = 1 - currentPlayerIndex;
    };

    const stringifyBoard = () => {
        return board
            .map(row => row.map(cell => cell ? cell : 0).join("|"))
            .join("\n");
    };

    //check if there are any rows, columns or diagonals with the same marker
    const checkWinner = () => {
        const board = gameBoard.getBoard();

        // Check rows
        for (let row = 0; row < size; row++) {
            const first = board[row][0];
            if (first && board[row].every(cell => cell === first)) {
                return first;
            }
        }
        
        // Check columns
        for (let col = 0; col < size; col++) {
            const first = board[0][col];
            if (first && board.every(row => row[col] === first)) {
                return first;
            }
        }
        
        // Check diagonals
        const mainDiagSet = new Set(board.map((row, i) => row[i]));
        if (mainDiagSet.size === 1 && !mainDiagSet.has(null)) {
            return board[0][0];
        }
        
        const antiDiagSet = new Set(board.map((row, i) => row[board.length-1-i]));
        if (antiDiagSet.size === 1 && !antiDiagSet.has(null)) {
            return board[0][size-1];
        }
        
        return null;
    };

    const makeMove = (row,col) => {
            if (gameBoard.setCell(row, col, getCurrentPlayer().marker)) {
                const winner = checkWinner();
                if (winner) return {status: "win", winner};
                if (gameBoard.isFull()) return {status: "tie"};
                switchPlayer();
                return {status: "continue"};
            }
            return { status: "invalid"};
    };

    const resetGame = () => {
        gameBoard.reset();
        currentPlayerIndex = 0;
    };

    gameBoard.setCell(0, 0, players[0].marker);
    gameBoard.setCell(0, 1, players[1].marker);
    gameBoard.setCell(0, 2, players[0].marker);
    gameBoard.setCell(1, 0, players[1].marker);
    gameBoard.setCell(1, 1, players[0].marker);
    gameBoard.setCell(1, 2, players[1].marker);
    gameBoard.setCell(2, 0, players[0].marker);
    gameBoard.setCell(2, 1, players[1].marker);
    gameBoard.setCell(2, 2, players[1].marker);
    

    // console.log("Current Board State:");
    // console.log(stringifyBoard());
    // console.log(players);
    // if (checkWinner(board)) {
    //     console.log("Winner:", checkWinner(board));
    //     console.log("Game Over");
    // } else if (gameBoard.isFull()) {
    //     console.log("The board is full.");
    //     console.log("Game Over");
    // }
    return {makeMove, getCurrentPlayer, resetGame}
})();


//referene to gameboard and two players

//manually call gameController to check in console that it's working
//add html, css and DOM mainpulation
//connst DOM to game logic (when a cell is click
//call the gameController to update the board state)