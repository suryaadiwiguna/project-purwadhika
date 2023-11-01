class DB {
    static #connection = "";

    static #initializeConncetion() {
        const randomNum = Math.ceil(Math.random() * 100);
        DB.#connection = `New Database Connection ${randomNum}`;
    }

    static getConnection() {
        if (!DB.#connection) {
            this.#initializeConncetion();
        }

        return DB.#connection;
    }
}

const Connection = new DB();
console.log(DB.getConnection())

console.log(Connection.getConnection())