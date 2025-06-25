//gameboard module IIFE
//This module will manage the board state.
//It will provide methods to reset the board, get the current state of the board, set a cell, get a cell, and check if the board is full.
const gameBoard = ( () =>{
    const size = 3;
    let board = Array(size).fill().map( () => Array(size).fill(null));

    const reset = () => { 
        board = Array(size).fill().map( () => Array(size).fill(null));
    };

    const getCell = (row, col) => {
        if (row >= 0 && row < size && col >= 0 && col < size) {
            return board[row][col];
        }
        return null;
    };

    const setCell = (row, col, marker) => {
        if (row >= 0 && row < size && col >= 0 && col < size && board[row][col] === null) {
            board[row][col] = marker;
            return true;
        }
        return false;
    };

    const isFull = () => board.every(row => row.every(cell => cell !== null));

    const getBoard = () => board.map(row => [...row]);
    
    return {reset, getCell, setCell, isFull, getBoard};
}) ();

//player factory function
const createPlayer = (name, marker) => {
    return {name, marker};
}

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

    const stringifyBoard = (board) => {
        return board
            .map(row => row.map(cell => cell ? cell : 0).join("|"))
            .join("\n");
    };

    //check if there are any rows, columns or diagonals with the same marker
    const checkWinner = () => {
        const board = gameBoard.getBoard();

        // Check rows
        for (let row = 0; row < board.length; row++) {
            const first = board[row][0];
            if (first && board[row].every(cell => cell === first)) {
                return first;
            }
        }
        
        // Check columns
        for (let col = 0; col < board.length; col++) {
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
            return board[0][board.length-1];
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
    return {makeMove, getCurrentPlayer, resetGame, stringifyBoard}
})();

gameBoard.reset();
console.log("Game Reset");
console.log(gameController.stringifyBoard(gameBoard.getBoard()));

const moves = [
    [0, 0], // X moves
    [0, 1], // O moves
    [0, 2], // X moves
    [1, 0], // O moves
    [1, 1], // X moves
    [1, 2], // O moves
    [2, 0], // X moves
    [2, 1], // O moves
    [2, 2]  // X moves
]

for (const [row, col] of moves) {
    const result = gameController.makeMove(row, col);
    console.log(`Player ${gameController.getCurrentPlayer().marker} moved to (${row}, ${col})`);
    if (result.status === "win") {
        break;
    }
}

const board = gameBoard.getBoard();
console.log("Current Board State:");
console.log(gameController.stringifyBoard(board));


//referene to gameboard and two players

//manually call gameController to check in console that it's working
//add html, css and DOM mainpulation
//connst DOM to game logic (when a cell is click
//call the gameController to update the board state)

//display controller module IIFE
//This module will handle the UI updates and interactions.
const displayController = (() => {
    const gameboardElement = document.getElementById("gameboard");
    const welcomeMessage = document.getElementById("welcome-message");
    const startButton = document.getElementById("start-game");
    const gameInfo = document.getElementById("game-info");
    const cells = document.querySelectorAll(".cell");

    renderBoard = () => {
        const board = gameBoard.getBoard();
        gameboardElement.innerHTML = board.map((row, rowIndex) => `
            <div class="row">
                ${row.map((_, colIndex) => `
                    <div class="cell" data-row="${rowIndex}" data-col="${colIndex}"}>
                    </div>
                `).join("")}
            </div>
        `).join("");
    };
    
    startButton.addEventListener("click", () => {
        gameController.resetGame();
        renderBoard();
        startButton.classList.add("hide");
        welcomeMessage.classList.add("hide");
        const gameStatus = document.createElement("h2");
        gameStatus.classList.add("timeout-message");
        gameStatus.textContent = "Are you ready to play?";
        gameInfo.appendChild(gameStatus);

        const showMessages = async () => {
            //Initial fade in (2s)
            await fadeMessage(gameStatus, "Are you ready?", 2000);

            // Instruction fade in (2s)
            await fadeMessage(gameStatus, "Press any cell to start playing", 2000);

            // Final fade in (2s)
            await fadeMessage(gameStatus, `Current Player: ${gameController.getCurrentPlayer().marker}`, 2000);

        }

        const fadeMessage = async (element, message, duration) => {
            element.style.opacity = "0";
            await new Promise(r => setTimeout(r, 500)); // wait for fade out
            element.textContent = message;
            element.style.opacity = "1";
            await new Promise(r => setTimeout(r, duration)); // wait for fade in
        }

        showMessages();
        


        // setTimeout(() => {
        //     // fade out the welcome message
        //     gameStatus.style.opacity = "0";
        
        //     setTimeout(() => {
        //         // Fade in the instruction
        //         gameStatus.textContent = "Press any cell to start playing!";
        //         gameStatus.style.opacity = "1";

        //         setTimeout(() => {
        //             // Fade out the instruction
        //             gameStatus.style.opacity = "0";

        //             setTimeout(() => {
        //                 // Fade in the current player
        //                 gameStatus.textContent = `Current Player: ${gameController.getCurrentPlayer().marker}`;
        //                 gameStatus.style.opacity = "1";
                        
        //             }, 500);

        //         }, 2000);
        //     }, 500);
        
        // }, 2000);
    });


    // gameboardElement.innerHTML = `
    //     <div class="row">
    //         <div class="cell" data-row="0" data-col="0" marker="X">
    //             <i class="fa-solid fa-xmark"></i>
    //         </div>
    //         <div class="cell" data-row="0" data-col="1" marker="O">
    //             <i class="fa-solid fa-o"></i>
    //         </div>
    //         <div class="cell" data-row="0" data-col="2"></div>
    //     </div>
    //     <div class="row">
    //         <div class="cell" data-row="1" data-col="0"></div>
    //         <div class="cell" data-row="1" data-col="1"></div>
    //         <div class="cell" data-row="1" data-col="2"></div>
    //     </div>
    //     <div class="row">
    //         <div class="cell" data-row="2" data-col="0"></div>
    //         <div class="cell" data-row="2" data-col="1"></div>
    //         <div class="cell" data-row="2" data-col="2"></div>
    //     </div>
    // `;
})();