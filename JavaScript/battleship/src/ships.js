export default class Ship {
    constructor(length) {
        this.length = parseInt(length);
        this.hits = 0;
        this.sunk = false;
    }

    hit() {
        this.hits++;
        this.updateSunkStatus();
    }

    isSunk() {
        return this.sunk;
    }

    updateSunkStatus() {
        if (this.hits >= this.length) {
            this.sunk = true;
        }
    }
}
