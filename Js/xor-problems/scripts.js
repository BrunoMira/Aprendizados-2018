
var body = document.querySelector("body");

var canvas = document.getElementById('canvas');
canvas.style.background = "#000";
canvas.style.display = "block";
canvas.style.margin = "0 auto";

canvas.width = 400;
canvas.height = 400;

var context = canvas.getContext('2d');
var height = canvas.height;
var width = canvas.width;



var brain = new NeuralNetwork(2, 6, 1);


let training = [
    {
        inputs: [0 , 0],
        target: [0]
    },
    {
        inputs: [1 , 1],
        target: [0]
    },
    {
        inputs: [0 , 1],
        target: [1]
    },
    {
        inputs: [1 , 0],
        target: [1]
    }
]

let input = [1,0];
let targets = [ 2 , 0.5];

//let output = brain.feedforward(input);

    

    function draw(){

        let resolution = 10;
        let rows = width / resolution;
        let cols = height / resolution;

        for (let index = 0; index < 500; index++) {
            let train = random(training);
            brain.train(train.inputs, train.target);
        };

        for (let i = 0; i < cols; i++) {
            for (let j = 0; j < rows; j++) {
                let x1 = i / cols;
                let x2 = j / rows;
                let inputs = [x1 , x2];
                let guess = brain.predict(inputs);

                var x = Math.floor(255  * guess);
                context.beginPath();
                context.fillStyle = "rgb(" + x + "," + x + "," + x + ")";;
                context.fillRect(i*resolution , j * resolution, resolution, resolution);
            }
        }

    }
    draw()

    setInterval(draw, 100);



