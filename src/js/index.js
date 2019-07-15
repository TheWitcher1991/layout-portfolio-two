/* eslint-env node, mocha */

'use strict';

class Main {
    constructor(name) {
        this.name = name
    }

    get render() {
        console.log(this.name)
        return true;
    }
}

(function () {

    const app = new Main('website');
    if (app) app.render;

}());