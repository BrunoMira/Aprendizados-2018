

var Perceptron = function (n = 2 , c) {

    this.weights = new Array(n);

    for (let index = 0; index < this.weights.length; index++) {
        this.weights[index] = Math.round( Math.random()*10 ) < 5 ? -1 : 1;
    }

    this.learningRate = c;

}

Perceptron.prototype.feedforward = function (inputs) {
    let sum = 0;

    for (let index = 0; index < inputs.length; index++) {
        sum += inputs[index] * this.weights[index];
    }

    return this.activated(sum);
}

Perceptron.prototype.train = function(inputs, target){

    guess = this.feedforward(inputs);

    error = target - guess;


    for( var count = 0; count < this.weights.length ; count ++){
        this.weights[count] += error * inputs[count] * this.learningRate;
    }


}

Perceptron.prototype.activated = function (sum) {
    if (sum >= 0)
        return 1;
    else
        return -1;
}
