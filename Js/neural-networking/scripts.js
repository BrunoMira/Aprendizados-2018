
var body = document.querySelector("body");

var canvas = document.getElementById('canvas');

var context = canvas.getContext('2d');
var height = canvas.height;
var width = canvas.width;

canvas.style.background = "#aaa";
canvas.style.display = "block";
canvas.style.margin = "0 auto";


var brain = new NeuralNetwork(2, 2, 1);

console.table(brain)

let training = [
    {
        inputs: [0 , 0],
        target: [1]
    },
    {
        inputs: [1 , 1],
        target: [1]
    },
    {
        inputs: [0 , 1],
        target: [0]
    },
    {
        inputs: [1 , 0],
        target: [0]
    }
]

let input = [1,0];
let targets = [ 2 , 0.5];

//let output = brain.feedforward(input);

    for (let index = 0; index < 5000; index++) {
        training.forEach( train => {


            brain.train(train.inputs, train.target);
        })
        
    };

    console.log(brain.feedforward([1 ,1 ]) );
    console.log(brain.feedforward([0 ,0 ]) );
    console.log(brain.feedforward([0 ,1 ]) );
    console.log(brain.feedforward([1 ,0 ]) );