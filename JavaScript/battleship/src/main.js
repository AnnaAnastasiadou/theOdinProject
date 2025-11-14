import './styles.css';
import Ship from './ships';
import Gameboard from './gameboard';

const gameboard = new Gameboard();
gameboard.placeShip(3, { x: 0, y: 0 });
const attack = gameboard.receiveAttack({ x: 0, y: 0 });
