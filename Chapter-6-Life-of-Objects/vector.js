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
}
var vec1 = new Vector(1,2)
var vec2 = new Vector(3,6)
console.log(vec1.getPlus(vec2));
console.log(vec2.getMinus(vec1));