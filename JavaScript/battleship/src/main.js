import './styles.css';
import Ship from './ships';
import Gameboard from './gameboard';
import Player from './player';
import DOMManager from './domManager';
const human = new Player();
const computer = new Player('computer');

const playerBoardDiv = document.getElementById('player1-board');
const computerBoardDiv = document.getElementById('player2-board');

DOMManager.createBoard(playerBoardDiv, human.gameboard.boardSize);
DOMManager.createBoard(computerBoardDiv, computer.gameboard.boardSize);
