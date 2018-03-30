


var inputs = [-1, 0.5];
var points = [];
var brain = new Perceptron(3 , 0.5);

const NUM_POINTS = 1000;

var body = document.querySelector("body");

var canvas = document.getElementById('canvas');

var context = canvas.getContext('2d');
var height = canvas.height;
var width = canvas.width;

var x1 = -1;
var y1 = f(x1);
var x2 = 1;
var y2 = f(x2);


canvas.style.background = "#aaa";
canvas.style.display = "block";
canvas.style.margin = "0 auto";


//context.moveTo(0, height);
//context.lineTo(width,0);
function iniciar() {
    var p1 = new Point(x1, y1);
    var p2 = new Point(x2, y2);

    context.beginPath();

    context.moveTo(p1.pixelX(), p1.pixelY());
    context.lineTo(p2.pixelX(), p2.pixelY());

    context.strokeStyle = "#000000";
    context.stroke();


    for (let index = 0; index < NUM_POINTS; index++) {
        var point = new Point();
        point.drawInCanvas(context);

        points.push(point);
    };

}

function redrawPoints(){
    var p1 = new Point(x1, y1);
    var p2 = new Point(x2, y2);

    context.beginPath();

    context.moveTo(p1.pixelX(), p1.pixelY());
    context.lineTo(p2.pixelX(), p2.pixelY());

    context.strokeStyle = "#000000";
    context.stroke();

    for (let index = 0; index < points.length; index++) {
        points[index].drawInCanvas(context);
    };

}

function clearCanvas(){
    context.clearRect(0, 0, width, height);
}


function traning(){
    clearCanvas();
    redrawPoints();

    for (let index = 0; index < points.length; index++) {
        
        //treinando o perceptron

        var guess = brain.feedforward([points[index].x, points[index].y, points[index].bias]);

        brain.train([points[index].x, points[index].y, points[index].bias], points[index].label);

        context.beginPath();
        context.arc(points[index].pixelX(), points[index].pixelY(), 3, 0, 2 * Math.PI);

        if (guess == points[index].label) {
            context.fillStyle = "#00ff00";
            
        } else {
            context.fillStyle = "#ff0000";
           
        }

        context.fill();

    };

        context.beginPath();
        var p3 = new Point(x1, brain.guessY(x1));
        var p4 = new Point(x2, brain.guessY(x2));

        context.moveTo(p3.pixelX(), p3.pixelY());
        context.lineTo(p4.pixelX(), p4.pixelY());

        context.strokeStyle = "#ff0000";
        context.stroke();

}

var intervalNumber;

canvas.addEventListener("click", function(){
    intervalNumber = setInterval(traning,100);
});


iniciar();

