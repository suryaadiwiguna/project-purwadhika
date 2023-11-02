class Player {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.power = 10;
    }

    gotHit(power) {
        console.log(this.name, "got HIT by", power, "damage!");
        this.health -= power;
    }

    useItem(item) {
        this.health += item.health;
        this.power += item.power;
    }

    showStatus() {
        console.log(this);
    }
}

class ShootingGame {
    constructor(arena, player1, player2) {
        this.arena = arena;
        this.player1 = player1;
        this.player2 = player2;
    }

    getRandomItem() {
        let randomNumber = [0, 10]; //Only allow 0 or 10
        return {
            health: randomNumber[Math.floor(Math.random() * randomNumber.length)],
            power: randomNumber[Math.floor(Math.random() * randomNumber.length)]
        }
    }

    start() {
        console.log("GAME START");

        while (this.player1.health > 0 && this.player2.health > 0) {
            console.log("Players' latest statuses")
            this.player1.showStatus();
            this.player2.showStatus();

            console.log("Players acquiring random items.");
            this.player1.useItem(this.getRandomItem());
            this.player2.useItem(this.getRandomItem());

            this.player1.showStatus();
            this.player2.showStatus();

            this.player1.gotHit(this.player2.power);
            this.player2.gotHit(this.player1.power);

            console.log("== END ROUND ==");
        }

        console.log("/// GAME OVER ///")
        if (this.player1.health > this.player2.health) {
            console.log(this.player1.name, "WIN", this.arena, "match!")
        } else {
            console.log(this.player2.name, "WIN", this.arena, "match!")
        }
    }
}

const player1 = new Player("Surya");
const player2 = new Player("Azelia");

const arena1 = new ShootingGame("Cicurug", player1, player2);

arena1.start();