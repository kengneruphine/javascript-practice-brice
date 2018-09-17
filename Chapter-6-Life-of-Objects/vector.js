function Vector(x, y) {
    this.xpos = x;
    this.ypos = y;
    this.getX = function() {
    }
    this.getPlus = function(vector) {
        return ("Vector add = "+ ' ' + '(' +(this.xpos + vector.xpos) + ',' + (this.ypos + vector.ypos) + ')');
    }
    this.getMinus = function (vector) {
        return ("Vector subtract = " + ' ' + '(' + (this.xpos - vector.xpos) + ',' + (this.ypos - vector.ypos)+ ')');
    }
    Object.defineProperty(this, 'length', {
        get: function() {
            var x = y = tmpx = tmpy = 0;
            tmpx = Math.pow(this.xpos, 2);
            tmpy = Math.pow(this.ypos, 2);
            return ((Math.sqrt(tmpx + tmpy)).toFixed(3));
        }
    } )
}
var vec1 = new Vector(1,2)
var vec2 = new Vector(3,6)
console.log(vec1.getPlus(vec2));
console.log(vec2.getMinus(vec1));
console.log(vec2.length)