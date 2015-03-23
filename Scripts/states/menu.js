/// <reference path="../constants.ts" />
/// <reference path="../objects/gameobject.ts" />
/// <reference path="../objects/enemy.ts" />
/// <reference path="../objects/ball.ts" />
/// <reference path="../objects/hallway.ts" />
/// <reference path="../objects/laser.ts" />
/// <reference path="../objects/samus.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/scoreboard.ts" />
var states;
(function (states) {
    // MENU STATE
    var Menu = (function () {
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++++
        function Menu() {
            createjs.Sound.play("title", { loop: -1 });
            // Instantiate Game Container
            this.game = new createjs.Container();
            // Add ocean to game
            this.hallway = new objects.Hallway();
            this.game.addChild(this.hallway);
            var playScreen = new createjs.Bitmap("assets/images/playscreen.png");
            playScreen.x = 20;
            playScreen.y = 60;
            /* var mailPilotLabel: objects.Label = new objects.Label("MEDTROID FLYER", constants.SCREEN_CENTER_WIDTH, 100);
             mailPilotLabel.font = "80px Consolas";
             mailPilotLabel.regX = mailPilotLabel.getMeasuredWidth() * 0.5;
             mailPilotLabel.regY = mailPilotLabel.getMeasuredHeight() * 0.5;
             this.game.addChild(mailPilotLabel);*/
            this.game.addChild(playScreen);
            this.playButton = new objects.Button("playButton", 200, 400);
            this.game.addChild(this.playButton);
            this.playButton.on("click", this.playButtonClicked, this);
            this.howtoButton = new objects.Button("howtoButton", 400, 400);
            this.game.addChild(this.howtoButton);
            this.howtoButton.on("click", this.howtoButtonClicked, this);
            stage.addChild(this.game);
        } // constructor end
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++++++++++++
        Menu.prototype.playButtonClicked = function () {
            this.game.removeAllChildren();
            createjs.Sound.stop();
            stage.removeChild(this.game);
            currentState = constants.PLAY_STATE;
            stateChanged = true;
        };
        Menu.prototype.howtoButtonClicked = function () {
            this.game.removeAllChildren();
            stage.removeChild(this.game);
            currentState = constants.HOW_TO_STATE;
            stateChanged = true;
        };
        // UPDATE METHOD
        Menu.prototype.update = function () {
            this.hallway.update();
        }; // update method end
        return Menu;
    })();
    states.Menu = Menu;
})(states || (states = {}));
//# sourceMappingURL=menu.js.map