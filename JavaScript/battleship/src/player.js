import Gameboard from './gameboard';

export default class Player {
    static nextId = 1;
    constructor(type = 'real') {
        if (type !== 'real' && type !== 'computer') {
            throw new Error("Player type must be 'real' or 'computer'");
        }
        this.id = Player.nextId++;
        this.type = type;
        this.gameboard = new Gameboard();
    }
}
