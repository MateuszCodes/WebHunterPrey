/**
 * Created by mateusz on 20/01/17.
 */

function Hunter() {

}

function FastPrey(dirOfMovIn) {

    this.dirOfMov = dirOfMovIn;

    this.move = moveFast(this.dirOfMov);

}

function SlowPrey(dirOfMovIn) {

    this.dirOfMov = dirOfMovIn;

    this.move = moveSlow(this.dirOfMov);

}

function moveFast(dirOfMov) {

    switch (dirOfMov) {
        case 0:
            this.position.y -= 2;
            break;
        case 1:
            this.position.x += 2;
            this.position.y -= 2;
            break;
        case 2:
            this.position.x += 2;
            break;
        case 3:
            this.position.x += 2;
            this.position.y += 2;
            break;
        case 4:
            this.position.y += 2;
            break;
        case 5:
            this.position.x -= 2;
            this.position.y += 2;
            break;
        case 6:
            this.position.x -= 2;
            break;
        case 7:
            this.position.x -= 2;
            this.position.y -= 2;
            break;
    }
}

function moveSlow(dirOfMov) {

    switch (dirOfMov) {
        case 0:
            this.position.y -= 1;
            break;
        case 1:
            this.position.x += 1;
            this.position.y -= 1;
            break;
        case 2:
            this.position.x += 1;
            break;
        case 3:
            this.position.x += 1;
            this.position.y += 1;
            break;
        case 4:
            this.position.y += 1;
            break;
        case 5:
            this.position.x -= 1;
            this.position.y += 1;
            break;
        case 6:
            this.position.x -= 1;
            break;
        case 7:
            this.position.x -= 1;
            this.position.y -= 1;
            break;
    }
}