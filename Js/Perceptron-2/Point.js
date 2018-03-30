
var Point = function (x = random(-1, 1), y = random(-1, 1)) {
    this.x =  x ;
    this.y = y ;
    this.bias = 1;
    this.label = 0;
    
    var lineY = f(this.x)

    if (this.y > lineY)
        this.label = 1;
    else
        this.label = -1;


}

Point.prototype.pixelX = function(){
    return map(this.x , -1, 1, 0, width);
}

Point.prototype.pixelY = function(){
    return map(this.y, -1, 1, height, 0);
}


Point.prototype.drawInCanvas = function (context) {

    context.beginPath();

    var px = this.pixelX();
    var py = this.pixelY();

    context.arc(px, py, 5, 0, 2 * Math.PI);

    if (this.label == 1)
        context.fillStyle = "#fff";
    else
        context.fillStyle = "#000";

    context.fill();
}

