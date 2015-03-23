var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    var Laser = (function (_super) {
        __extends(Laser, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++
        function Laser() {
            _super.call(this, "laser");
            this.name = "laser";
            this.soundString = "explosion";
            this._dx = 5;
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++
        Laser.prototype._checkBounds = function () {
            if (this.x >= 680 + this.width) {
            }
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        Laser.prototype.update = function () {
            //this.y += this._dy;
            this.x += this._dx;
            this._checkBounds();
        };
        Laser.prototype.hit = function () {
        };
        return Laser;
    })(objects.GameObject);
    objects.Laser = Laser;
})(objects || (objects = {}));
//# sourceMappingURL=laser.js.map