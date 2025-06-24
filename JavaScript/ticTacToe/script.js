//gameboard module IIFE
//This module will manage the board state.
const gameBoard = ( () =>{
    const size = 3;
    const resetBoard = () => Array.from({length: size}, () => Array(size).fill(null));
    let board = resetBoard();
    const getBoard = () => board;
    const getBoardSize = () => size;
    const setCell = (row, col, marker) => board[row][col] = marker;
    const getCell = (row, col) => board[row][col];
    const checkIfFull = () => board.every(row => row.every(cell => cell !== null));
    return {resetBoard, getBoard, getBoardSize, setCell, getCell, checkIfFull};
}) ();

//player factory function
const player = (name, marker) => {
    return {name, marker};
}

//game controller module IIFE
const gameController = ( () => {
    const board = gameBoard.getBoard();
    const players = [
        //create player objects
        player("Anna", "X"),
        player("Ellie", "O")
    ];

    const stringifyBoard = () => {
        return board
            .map(row => row.map(cell => cell ? cell : 0).join("|"))
            .join("\n");
    };

    //check if there are any rows, columns or diagonals with the same marker
    const checkWinner = (board) => {
        // Check rows
        const rowWinner = board.find(row => {
            const set = new Set(row);
            return set.size === 1 && !set.has(null);
        });
        if (rowWinner) return rowWinner[0];
        
        // Check columns
        for (let i = 0; i < board.length; i++) {
            const colSet = new Set(board.map(row => row[i]));
            if (colSet.size === 1 && !colSet.has(null)) {
                return board[0][i];
            }
        }
        
        // Check diagonals
        const size = board.length;
        const mainDiagSet = new Set(board.map((row, i) => row[i]));
        if (mainDiagSet.size === 1 && !mainDiagSet.has(null)) {
            return board[0][0];
        }
        
        const antiDiagSet = new Set(board.map((row, i) => row[size-1-i]));
        if (antiDiagSet.size === 1 && !antiDiagSet.has(null)) {
            return board[0][size-1];
        }
        
        return null;
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
    

    console.log("Current Board State:");
    console.log(stringifyBoard());
    console.log(players);
    if (checkWinner(board)) {
        console.log("Winner:", checkWinner(board));
        console.log("Game Over");
    } else if (gameBoard.checkIfFull()) {
        console.log("The board is full.");
        console.log("Game Over");
    }
})();


//referene to gameboard and two players

//manually call gameController to check in console that it's working
//add html, css and DOM mainpulation
//connst DOM to game logic (when a cell is click
//call the gameController to update the board state)