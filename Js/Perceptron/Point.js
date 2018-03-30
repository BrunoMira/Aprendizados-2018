
var Point = function () {
    this.x = Math.round(Math.random() * width);
    this.y = Math.round(Math.random() * height);
    this.label = 0;

    if (this.x > this.y)
        this.label = 1;
    else
        this.label = -1;


}

Point.prototype.drawInCanvas = function (context) {

    context.beginPath();

    context.arc(this.x, this.y, 5, 0, 2 * Math.PI);

    if (this.label == 1)
        context.fillStyle = "#fff";
    else
        context.fillStyle = "#000";

    context.fill();
}