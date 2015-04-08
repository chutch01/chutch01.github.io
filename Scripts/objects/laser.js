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
        function Laser(x, y, samus, container) {
            _super.call(this, "laser");
            this._dx = 5;
            this.x = x;
            this.y = y;
            this.soundString = "laser_sound";
            this.samus = samus;
            this._container = container;
        }
        //public methods+++++++++++++++++++++++++++
        Laser.prototype._reset = function () {
            this._container.removeChild(this);
            this.samus.lasers.splice(this.samus.lasers.indexOf(this), 1);
            this.samus.totalLasers--;
        };
        Laser.prototype._checkBounds = function () {
            //console.log("checking bounds");
            if (this.x >= 680 + this.width) {
                this._reset();
            }
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        Laser.prototype.update = function () {
            this.x += 5;
            // console.log("about to check bounds");
            this._checkBounds();
        };
        Laser.prototype.hit = function () {
            createjs.Sound.play("enemyexplosion");
            this._reset();
        };
        return Laser;
    })(objects.GameObject);
    objects.Laser = Laser;
})(objects || (objects = {}));
//# sourceMappingURL=laser.js.map