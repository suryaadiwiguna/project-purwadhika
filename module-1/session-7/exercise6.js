/*
● Specifications :
    ○ Create a shooting game between two player
    ○ Each player has three properties : name, health and power
    ○ Each player will take turns to shooting
    ○ Before shooting, players get a chance to get random items (health +10 or power +10)
    ○ The game will continue until one of the players has health < 0
● Requirements :
    ○ Create ShootingGame & Player class
    ○ ShootingGame class :
        ■ constructor(player1, player2) → player objects as a parameter
        ■ getRandomItem() → return { health: 0 or 10, power: 0 or 10 }
        ■ start() → start shooting games
    ○ Player class :
        ■ Property → name, health (default 100), power (default 10)
        ■ hit(power) → subtract player health
        ■ useItem(item) → apply item to player (increase health or power, based on result from getRandomItem())
        ■ showStatus() → show player status (ex : “Player A (Health => 100, Power => 10) ”)
    ○ ShootingGame start() function flow :
    ■   In every turn :
        ● Show each player status before shooting
        ● Get random item for each player before shooting
        ● Show each player status after shooting
    ■ Show winner name
*/

class Player {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.power = 10;
    }

    hit(power) {
        console.log(this.name, "Got hit by", power, "damage!");
        this.health -= power;
    }

    useItem(item) {
        this.health += item.health;
        this.power += item.power;
    }

    showStatus() {
        console.log(this)
    }
}

class ShootingGame {
    constructor(arena, player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
        this.arena = arena;
    }

    getRandomItem() {
        let randomNumber = [0, 10]; //Only allow 0 or 10
        return {
            health: randomNumber[Math.floor(Math.random() * randomNumber.length)],
            power: randomNumber[Math.floor(Math.random() * randomNumber.length)]
        }
    }

    start() {
        this.player1.showStatus();
        this.player2.showStatus();
        console.log("== START ==");

        while (this.player1.health > 0 && this.player2.health > 0) {

            console.log("All players acquiring random items!")
            let player1RandomItem = this.getRandomItem();
            this.player1.useItem(player1RandomItem);

            let player2RandomItem = this.getRandomItem();
            this.player2.useItem(player2RandomItem);

            this.player1.showStatus();
            this.player2.showStatus();

            this.player2.hit(this.player1.power);
            this.player1.hit(this.player2.power);

            this.player1.showStatus();
            this.player2.showStatus();

            console.log("== END ROUND ==");

        }

        console.log("== GAME OVER ==");
        if (this.player1.health > this.player2.health) {
            console.log(this.player1.name, "WIN", this.arena, "match!");
        } else {
            console.log(this.player2.name, "WIN", this.arena, "match!");
        }
    }
}

const player1 = new Player("Idrus");
const player2 = new Player("Fahmie");

const arena1 = new ShootingGame("GBK", player1, player2);
const arena2 = new ShootingGame("Jakarta", player1, player2);
arena1.start();
arena2.start();
