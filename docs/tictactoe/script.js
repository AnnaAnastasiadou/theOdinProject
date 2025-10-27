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
    let players = [
        createPlayer("Player 1", "X"),
        createPlayer("Player 2", "O")
    ];
    let firstPlayerIndex = 1;

    let currentPlayerIndex = firstPlayerIndex;
    let currentRound = 1;

    const setPlayerNames = (name1, name2) => {
        players[0].name = name1 || "Player 1";
        players[1].name = name2 || "Player 2";
    }

    const getPlayers = () => players.map(p => ({ ...p }));

    const getCurrentPlayer = () => players[currentPlayerIndex];

    const getCurrentRound = () => currentRound;

    const switchPlayer = () => currentPlayerIndex = 1 - currentPlayerIndex;;

    const checkWinner = () => {
        const board = gameBoard.getBoard();

        // Check rows and columns
        for (let i = 0; i < board.length; i++) {
            if (board[i][0] && board[i].every(cell => cell === board[i][0])) {
                return {winner: board[i][0], line: {type: "row", index: i}};
            }
            if (board[0][i] && board.every(row => row[i] === board[0][i])) {
                return {winner: board[0][i], line: {type: "column", index: i}};
            }
        }
    
        // Check diagonals
        if (board.every((row, i) => row[i] === board[0][0] && row[i] != null)) return {winner: board[0][0], line: {type: "main-diagonal"}};
        if (board.every((row, i) => row[board.length - 1 - i] === board[0][board.length - 1] && row[board.length - 1 - i] != null)) return {winner: board[0][board.length - 1], line: {type: "anti-diagonal"}};
        
        return null;
    };

    const makeMove = (row,col) => {
            const currentPlayer = getCurrentPlayer();
            if (!gameBoard.setCell(row, col, currentPlayer.marker)) return { status: "invalid"};
    
            const result = checkWinner();
            if (result) {
                currentPlayer.wins++;
                currentRound++;
                return {status: "win", winner: currentPlayer, line: result.line};
            } 
            if (gameBoard.isFull()) {
                currentRound++;
                return {status: "tie"};
            }
            
            return {status: "continue"};
        
    };

    const restartGame = () => {
        gameBoard.reset();
        firstPlayerIndex = 1 - firstPlayerIndex;
        currentPlayerIndex = firstPlayerIndex;
    }

    const resetGame = () => {
        gameBoard.reset();
        firstPlayerIndex = 0;
        currentPlayerIndex = firstPlayerIndex;
        players.forEach(player => player.wins = 0);
        currentRound = 1;
    };

    return {setPlayerNames, getPlayers, getCurrentPlayer, getCurrentRound, switchPlayer, makeMove, restartGame, resetGame}
})();

const displayController = (() => {
    const gameboardElement = document.getElementById("gameboard");
    const welcomeMessage = document.getElementById("welcome-message");
    const gameStatus = document.getElementById("game-status");
    const startRestartButton = document.getElementById("start-restart-game");
    const resultsElement = document.getElementById("results");
    const playersForm = document.getElementById("players-form");
    const submitNamesButton = document.getElementById("submit-names");
    const closeDialogButton = document.getElementById("close-dialog");

    const renderBoard = () => {
        const board = gameBoard.getBoard();
        gameboardElement.innerHTML = board.map((row, rowIndex) =>
            row.map((_, colIndex) =>
                `<div class="cell" data-row="${rowIndex}" data-col="${colIndex}"></div>`
            ).join("")
        ).join("");
    };

    const animateElement = (el, classes) => {
        el.classList.remove(...classes);
        requestAnimationFrame(() => el.classList.add(...classes));
    }

    const showWinLine = ({type, index = 0}) => {
        const line = document.getElementById("win-line");
        const gameboardRect = gameboardElement.getBoundingClientRect();
        
        // Get gap and padding value and convert to pixels (e.g., "8px" -> 8)
        const gapValue = window.getComputedStyle(gameboardElement).getPropertyValue("gap");
        const paddingValue = window.getComputedStyle(gameboardElement).getPropertyValue("padding");
        const gap = parseFloat(gapValue) || 0;
        const padding = parseFloat(paddingValue) || 0;
        console.log(padding);
        
        // Calculate effective cell size accounting for gaps
        const cellSize = (gameboardRect.width - 2 * gap - 2 * padding) / 3;
        const diagonalLength = Math.sqrt(2) * (3 * cellSize + 2 * gap); // 3 cells + 2 gaps
        
        // Reset line styles
        line.style.display = 'block';
        line.style.backgroundColor = 'yellow';
        line.style.height = '4px';
        line.style.position = 'absolute';
        line.style.margin = '0';
        line.style.padding = '0';
        line.style.transformOrigin = 'center center';
        
        switch (type) {
            case "row":
                line.style.width = `calc(100% - ${padding * 2}px)`;
                line.style.top = `${gap + (index * (cellSize + padding)) + (cellSize / 2) - 2}px`;
                line.style.left = `${padding}px`;
                line.style.transform = 'none';
                break;
                
            case "column":
                line.style.height = `calc(100% - ${padding * 2}px)`;
                line.style.width = '4px';
                line.style.top = `${padding}px`;
                line.style.left = `${padding + (index * (cellSize + padding)) + (cellSize / 2) - 2}px`;
                line.style.transform = 'none';
                break;
                
            case "main-diagonal":
                line.style.width = `${diagonalLength}px`;
                line.style.top = `${padding}px`;
                line.style.left = `${padding}px`;
                line.style.transform = 'rotate(45deg)';
                line.style.transformOrigin = '0 0';
                break;
                
            case "anti-diagonal":
                line.style.width = `${diagonalLength}px`;
                line.style.top = `${padding}px`;
                line.style.right = `${padding}px`;
                line.style.left = 'auto';
                line.style.transform = 'rotate(-45deg)';
                line.style.transformOrigin = '100% 0';
                break;
        }
    };
    
    const handleCellClick = (event) => {
        if (!event.target.classList.contains("cell") || gameboardElement.classList.contains("disabled")) return;
        
        const cell = event.target;
        const row = parseInt(cell.getAttribute("data-row"));
        const col = parseInt(cell.getAttribute("data-col"));
        const result = gameController.makeMove(row, col);
        const player = gameController.getCurrentPlayer();


        cell.innerHTML = `<i class="fa-solid fa-${player.marker.toLowerCase()}"></i>`;
        cell.setAttribute("marker", player.marker);

        switch (result.status) {
            case "win":
                gameStatus.innerHTML = `${result.winner.name} wins round ${gameController.getCurrentRound() - 1}!`;
                animateElement(gameStatus, ["slide-up"]);
                gameboardElement.classList.add("disabled");
                showWinLine(result.line);
                resultsElement.textContent = gameController.getPlayers()
                    .map(player => `${player.name}: ${player.wins}`).join(" ");
                animateElement(resultsElement, ["slide-up"]);
                resultsElement.style.display = "block";
                startRestartButton.textContent = result.winner.wins === 3 ? "New Game" : "Next Round";
                startRestartButton.classList.remove("hide");
                if (result.winner.wins === 3) {
                    gameStatus.innerHTML = `<div class="game-over slide-up">Game Over! </div><div class="winner slide-up">${result.winner.name} wins!</div>`;  
                }
                break;
            case "tie":
                gameStatus.textContent = "It's a tie!";
                gameboardElement.classList.add("disabled");
                startRestartButton.textContent = "Next Round"; 
                startRestartButton.classList.remove("hide"); 
                resultsElement.textContent = gameController.getPlayers()
                    .map(player => `${player.name}: ${player.wins}`).join(" ");
                resultsElement.style.display = "block";
                break;
            case "continue":
                gameController.switchPlayer();
                gameStatus.textContent = `Current Player: ${gameController.getCurrentPlayer().name}`;
                break;
            case "invalid":
                gameStatus.textContent = "Invalid move! Try another cell";
                break;
        }
    };

    const setupBoardListeners = () => {
        gameboardElement.removeEventListener("click", handleCellClick);
        gameboardElement.addEventListener("click", handleCellClick);
    };

    const submitNames = () => {
        const name1 = document.getElementById("name1").value.trim();
        const name2 = document.getElementById("name2").value.trim();
        if (confirm(`Are these names correct?\n\nPlayer 1: ${name1}\nPlayer 2: ${name2}`)) {
            gameController.setPlayerNames(name1, name2);
            playersForm.close();
            startGame();
        }
    }

    submitNamesButton.addEventListener("click", submitNames);

    playersForm.addEventListener("keydown", e => {
        if (e.key === "Enter") {
            e.preventDefault();
            submitNames();
        }
    })

    closeDialogButton.addEventListener("click", () => playersForm.close());

    const startGame = () => {
        const isNewGame = gameController.getPlayers().some(player => player.wins === 3);
        isNewGame ? gameController.resetGame() : gameController.restartGame();
        
        renderBoard();
        setupBoardListeners();

        // requestAnimationFrame(() => {
        //     gameboardElement.classList.add("visible");
        // });

        // setTimeout(() => {
        //     gameBoard.classList.add("visible");
        // }, 600);

        gameboardElement.classList.add("visible");
        gameboardElement.classList.remove("disabled");
        gameStatus.classList.remove("game-over", "hide");
        resultsElement.classList.add("hide");
        gameStatus.textContent = `Current Player: ${gameController.getCurrentPlayer().name}`;
        resultsElement.textContent = ""; 
        resultsElement.style.display = "none";
        startRestartButton.classList.add("hide");
        welcomeMessage.classList.add("hide");
        animateElement(gameStatus, ["slide-up"]);
        document.getElementById("win-line").style.display = "none";
        document.getElementById("win-line").style.width = "0"; 
    };
    
    startRestartButton.addEventListener("click", () => {
        startRestartButton.textContent === "Next Round" ? startGame() : playersForm.showModal();
    });
            
})();
