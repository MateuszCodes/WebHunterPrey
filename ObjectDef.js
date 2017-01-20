/**
 * Created by mateusz on 20/01/17.
 */

var Hunter = {

    playField: document.getElementById("playfield"),

    move: function (buttonPressed) {

        if (buttonPressed == KeyboardEvent.DOM_KEY_LOCATION_LEFT) {
            this.position.x -= 3;
        } else if (buttonPressed == KeyboardEvent.DOM_KEY_LOCATION_RIGHT) {
            this.position.x += 3;
        }

    }

}

var FastPrey = {

    dirOfMov: 0,

    move: function() {

        switch (this.dirOfMov) {
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
}

var SlowPrey = {

    dirOfMov: 0,

    move: function() {

        switch (this.dirOfMov) {
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
}