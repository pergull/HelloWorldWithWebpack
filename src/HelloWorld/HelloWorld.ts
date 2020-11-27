import {DisplayHelloWorld} from './DisplayHelloWorld.js';

export class HelloWorld {

    displayHelloWorld = new DisplayHelloWorld();

    constructor() {
    }

    run() {
        console.log("HelloWorldRun");
        this.displayHelloWorld.display();
    }
}