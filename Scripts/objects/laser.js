var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/*
 * this is the laser that the player fires from the character it will be removed if it collides with something
 */
var objects;
(function (objects) {
    var Laser = (function (_super) {
        __extends(Laser, _super);
        //constructor ++++++++++++++++++++++++++++
        function Laser(x, y, samus) {
            _super.call(this, "laser");
            this.x = x;
            this.y = y;
            this.samus = samus;
            this.soundString = "laser_sound";
        }
        //public methods+++++++++++++++++++++++++++
        Laser.prototype.update = function () {
            this.x += 5;
            if (this.x > 680) {
                this.samus.lasers.splice(this.samus.lasers.indexOf(this), 1); //remove a laser from the array
                stage.removeChild(this);
            }
        };
        Laser.prototype.hit = function () {
            console.log("laser exploded");
            createjs.Sound.play("enemyexplosion");
            this.samus.totalLasers--; //decrease the number of lasers in game
            this.samus.lasers.splice(this.samus.lasers.indexOf(this), 1);
            stage.removeChild(this);
        };
        return Laser;
    })(objects.GameObject);
    objects.Laser = Laser;
})(objects || (objects = {}));
//# sourceMappingURL=laser.js.map