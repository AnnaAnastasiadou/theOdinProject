//gameboard module IIFE
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
                
                return {status: "continue"};
            }
            return { status: "invalid"};
    };

    const resetGame = () => {
        gameBoard.reset();
        currentPlayerIndex = 0;
    };

    return {makeMove, getCurrentPlayer, switchPlayer, resetGame}
})();

const displayController = (() => {
    const gameboardElement = document.getElementById("gameboard");
    const welcomeMessage = document.getElementById("welcome-message");
    const gameStatus = document.getElementById("game-status");
    const startRestartButton = document.getElementById("start-restart-game");
    

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
    
    startRestartButton.addEventListener("click", () => {
        gameController.resetGame();
        renderBoard();
        startRestartButton.classList.add("hide");
        welcomeMessage.classList.add("hide");
        gameStatus.classList.remove("hide");

        const restartGame = () => {
            startRestartButton.textContent= "Restart Game";
            startRestartButton.classList.remove("hide");
        }

        const handleCellClick = (event) => {
            if (!event.target.classList.contains("cell") || event.target.classList.contains("disabled")) {
                console.log("not a cell or disabled")
                gameStatus.textContent = `Player ${gameController.getCurrentPlayer().marker} choose an available cell`
                return;
            }
            else {
                const cell = event.target;
                const row = parseInt(cell.getAttribute("data-row"));
                const col = parseInt(cell.getAttribute("data-col"));
                const result = gameController.makeMove(row, col);

                if (result.status === "invalid") {
                    gameStatus.textContent = "Invalid move. Try again.";
                    return;
                }
                
                cell.innerHTML = `<i class="fa-solid fa-${gameController.getCurrentPlayer().marker.toLowerCase()}"></i>`;
                cell.setAttribute("marker", gameController.getCurrentPlayer().marker);

                if (result.status === "win") {
                    gameStatus.textContent = `Player ${result.winner} wins!`;
                    gameboardElement.classList.add("disabled");
                    restartGame();
                }
                else if (result.status === "continue") {
                    gameController.switchPlayer();
                    gameStatus.textContent = `Current Player: ${gameController.getCurrentPlayer().marker}`;
                }
                else if (result.status ==="tie"){
                    gameStatus.textContent = "It's a tie!"
                    restartGame();
                }

            }
        };

        const fadeMessage = async (element, message, fadeInDuration = 2000, fadeOutDuration = 500) => {
            if (element.style.opacity !== "0") {
                element.style.opacity = "0";
                await new Promise(r => setTimeout(r, fadeOutDuration)); // Wait for fade out to complete
            }
            element.textContent = message;
            element.style.opacity = "1";
            await new Promise(r => setTimeout(r, fadeInDuration)); // Wait for fade in to complete
        }

        const showMessages = async () => {
            try {
                await fadeMessage(gameStatus, "Are you ready?");
                await fadeMessage(gameStatus, "Press any cell to start playing!");
                await fadeMessage(gameStatus, `Current Player: ${gameController.getCurrentPlayer().marker}`, 0);
                
                // enable interactions after messages
                gameboardElement.classList.remove("disabled");

                gameboardElement.addEventListener("click", handleCellClick); 
            } catch (error) {
                console.error("Error in showing messages:", error);
            }

        }

        showMessages();
    });
    
})();
