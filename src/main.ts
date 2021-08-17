import { firstFunc } from "./first";
import { secondFunc } from "./second";

class Main {

    constructor() {
        console.log("Executing the main class")
    }

    init() {
        firstFunc();
        secondFunc();
    }
}

const main = new Main();
main.init();
