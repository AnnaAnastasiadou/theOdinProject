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
    return {name, marker, wins: 0};
}

//game controller module IIFE
const gameController = ( () => {
    const players = [
        createPlayer("Player 1", "X"),
        createPlayer("Player 2", "O")
    ];

    let currentPlayerIndex = 0;
    let currentRound = 1;

    const getPlayers = () => [ {...players[0]}, {...players[1]}];

    const getCurrentPlayer = () => players[currentPlayerIndex];

    const getCurrentRound = () => currentRound;

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
            const currentPlayer = getCurrentPlayer();
            if (!gameBoard.setCell(row, col, currentPlayer.marker)) {
                return { status: "invalid"};
            }

            const winner = checkWinner();
            if (winner) {
                currentPlayer.wins++;
                currentRound++;
                return {status: "win", winner: currentPlayer};
            } 
            if (gameBoard.isFull()) {
                currentRound++;
                return {status: "tie"};
            }
            
            return {status: "continue"};
        
    };

    const restartGame = () => {
        gameBoard.reset();
        currentPlayerIndex = 0;
    }

    const resetGame = () => {
        restartGame();
        players[0].wins = 0;
        players[1].wins = 0;
        currentRound = 1;
    };

    return {getPlayers, getCurrentPlayer, getCurrentRound, switchPlayer, makeMove, restartGame, resetGame}
})();

const displayController = (() => {
    const gameboardElement = document.getElementById("gameboard");
    const welcomeMessage = document.getElementById("welcome-message");
    const gameStatus = document.getElementById("game-status");
    const startRestartButton = document.getElementById("start-restart-game");
    const resultsElement = document.getElementById("results");

    const renderBoard = () => {
        const board = gameBoard.getBoard();
        gameboardElement.innerHTML = board.map((row, rowIndex) => `
            <div class="row">
                ${row.map((_, colIndex) => `
                    <div class="cell" data-row="${rowIndex}" data-col="${colIndex}"></div>
                `).join("")}
            </div>
        `).join("");
    };

    const animateElement = (el, classes) => {
        el.classList.remove(...classes);
        setTimeout(() => {
            el.classList.add(...classes);
        }, 10);
        // void el.offsetWidth;
        // el.classList.add(...classes);
    }

    const handleCellClick = (event) => {
        if (!event.target.classList.contains("cell") || gameboardElement.classList.contains("disabled")) {
            return;
        }
        
        const cell = event.target;
        const row = parseInt(cell.getAttribute("data-row"));
        const col = parseInt(cell.getAttribute("data-col"));
        const round = gameController.getCurrentRound();
        const result = gameController.makeMove(row, col);
        cell.innerHTML = `<i class="fa-solid fa-${gameController.getCurrentPlayer().marker.toLowerCase()}"></i>`;
        cell.setAttribute("marker", gameController.getCurrentPlayer().marker);
        if (result.status === "win") {
            gameStatus.textContent = `Player ${result.winner.name} wins round ${round}!`;
            animateElement(gameStatus, ["slide-up"]);
            gameboardElement.classList.add("disabled");
            resultsElement.textContent = gameController.getPlayers()
                .map(player => `${player.name}: ${player.wins}`).join(" ");
            animateElement(resultsElement, ["show"]);
            resultsElement.style.display = "block";
            startRestartButton.textContent = "Next Round";
            startRestartButton.classList.remove("hide");
            if (result.winner.wins === 3) {
                gameStatus.innerHTML = `<div class="game-over slide-up">Game Over! </div><div class="winner slide-up">${result.winner.name} wins!</div>`;
                animateElement(gameStatus, ["show"]);
                startRestartButton.textContent = "New Game"
               animateElement(resultsElement, ["show"]);
            }
        }
        else if (result.status === "continue") {
            gameController.switchPlayer();
            gameStatus.textContent = `Current Player: ${gameController.getCurrentPlayer().marker}`;
        }
        else if (result.status ==="tie"){
            gameStatus.textContent = "It's a tie!";
            // animateElement(gameStatus, ["show"]);
            gameboardElement.classList.add("disabled");
            startRestartButton.textContent = "Restart Game"; 
            startRestartButton.classList.remove("hide"); 
            resultsElement.textContent = gameController.getPlayers()
                .map(player => `${player.name}: ${player.wins}`).join(" ");
            // animateElement(resultsElement, ["show"]);
            resultsElement.style.display = "block";
        }
        else if (result.status === "invalid") {
            gameStatus.textContent = "Invalid move! Try another cell";
            // animateElement(gameStatus, ["show"]);
        }
    };

    const setupBoardListeners = () => {
        gameboardElement.removeEventListener("click", handleCellClick);
        gameboardElement.addEventListener("click", handleCellClick);
    };
    
    startRestartButton.addEventListener("click", () => {
        // animateElement(gameStatus, ["fade-out"]);
        // animateElement(resultsElement, ["fade-out"]);

        const isNewGame = gameController.getPlayers().some(player => player.wins === 3);
        isNewGame ? gameController.resetGame() : gameController.restartGame();
        
        renderBoard();

        gameboardElement.classList.add("visible");
        setupBoardListeners();
        gameboardElement.classList.remove("disabled");
        gameStatus.classList.remove("game-over");
        startRestartButton.classList.add("hide");
        welcomeMessage.classList.add("hide");
        gameStatus.classList.remove("hide");
        resultsElement.classList.add("hide");
        gameStatus.textContent = `Current Player: ${gameController.getCurrentPlayer().marker}`;
        animateElement(gameStatus, ["show"]);
        resultsElement.textContent = ""; 
        animateElement(resultsElement, ["show"]);
        resultsElement.style.display = "none";
    });
    
})();
