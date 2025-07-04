// Player class definition
class Player {
    constructor(name, health, position) {
        this.name = name;
        this.health = health;
        this.position = position; // { x: 0, y: 0 }
    }

    move(x, y) {
        this.position.x += x;
        this.position.y += y;
        console.log(`${this.name} moved to (${this.position.x}, ${this.position.y})`);
    }

    takeDamage(amount) {
        this.health -= amount;
        console.log(`${this.name} took damage! Health is now: ${this.health}`);
        
        if (this.health <= 0) {
            this.die();
        }
    }

    die() {
        console.log(`${this.name} has died.`);
        // Handle player death (reset position, game over, etc.)
    }

    getStatus() {
        return `${this.name}: Health = ${this.health}, Position = (${this.position.x}, ${this.position.y})`;
    }
}

// Example of creating a player instance
const player1 = new Player('Hero', 100, { x: 0, y: 0 });
console.log(player1.getStatus());