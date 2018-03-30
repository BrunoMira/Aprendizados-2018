

var inputs = [-1, 0.5];
var points = [];
var brain = new Perceptron(2 , 0.0005);

const NUM_POINTS = 1000;

var body = document.querySelector("body");

var canvas = document.getElementById('canvas');

var context = canvas.getContext('2d');
var height = canvas.height;
var width = canvas.width;


canvas.style.background = "#aaa";
canvas.style.display = "block";
canvas.style.margin = "0 auto";


context.moveTo(0, 0);
context.lineTo(width, height);
context.stroke()

for (let index = 0; index < NUM_POINTS; index++) {
    var point = new Point();
    point.drawInCanvas(context);

    points.push(point);
};


function traning(){

    var hits = 0;
    var wrongs = 0;

    for (let index = 0; index < points.length; index++) {
        
        //treinando o perceptron

        var guess = brain.feedforward([points[index].x, points[index].y]);

        brain.train([points[index].x, points[index].y], points[index].label);

        context.beginPath();
        context.arc(points[index].x, points[index].y, 3, 0, 2 * Math.PI);

        if (guess == points[index].label) {
            context.fillStyle = "#00ff00";
            hits++;
        } else {
            context.fillStyle = "#ff0000";
            wrongs++;
        }

        context.fill();
    };

    document.querySelector("#hits").innerText = hits;
    document.querySelector("#error").innerText = wrongs;
    document.querySelector("#pesos").innerText = "Peso 1: " + brain.weights[0] + " Peso 2: " + brain.weights[1];

}



canvas.addEventListener("click", traning);