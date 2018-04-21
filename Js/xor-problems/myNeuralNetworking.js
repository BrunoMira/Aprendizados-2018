
function sigmoid(x){
    return 1 / (1 + Math.exp(-x));
}

function dsigmoid(x) {
    return x * ( 1 - x);
}

function NeuralNetwork(num_Input, num_Hidden, num_Output) {

    this.input_nodes = num_Input;  //2
    this.hidden_nodes = num_Hidden;  // 2
    this.output_nodes = num_Output;  // 2
    this.learning_rate = 0.5;

    this.weight_inputs_hidden = new Matrix(this.hidden_nodes, this.input_nodes);  // 2 2

    this.weight_hidden_output = new Matrix(this.output_nodes, this.hidden_nodes); // 1 2

    this.weight_inputs_hidden.randomize();
    this.weight_hidden_output.randomize();

    this.bias_h = new Matrix(this.hidden_nodes, 1); // 2 1
    this.bias_o = new Matrix(this.output_nodes, 1); // 1 1
    
    this.bias_h.randomize();
    this.bias_o.randomize();

   

}

NeuralNetwork.prototype.predict = function(inputs){

    //Gerando as saídas dos neuronios ocultos
    let matrix_input = Matrix.fromArray(inputs);
  
    

    let hidden = Matrix.multiply(this.weight_inputs_hidden, matrix_input);   //  2 2 X 2 1

    
    hidden.add(this.bias_h);

    hidden.map(sigmoid);


    let guess =  Matrix.multiply(this.weight_hidden_output , hidden);

    guess.add(this.bias_o);
    guess.map(sigmoid);

    // Lots of Matrix Math;

    return guess.toArray();
}


NeuralNetwork.prototype.train = function (inputs_array, target_array){

    
    let input = Matrix.fromArray(inputs_array)
    let hidden = Matrix.multiply(this.weight_inputs_hidden, input);

    hidden.add(this.bias_h);

    hidden.map(sigmoid);

    let output = Matrix.multiply(this.weight_hidden_output, hidden);
    output.add(this.bias_o);
    output.map(sigmoid);

    let target = Matrix.fromArray(target_array);



    //TODO calculate the error

    /*
        Para realizar o aprendizado da maquina (ajustes), preciso calcular o delta weight e delta b

        que seria a seria:
        learning_rate * inputs * errors

        Learning_rate é um valor fracionado para ajustar o peso e bias do rede neural

        O motivo dele é bem simples, para otimizar a rede neural, você deve achar o peso e bias ideais,
        e digamos que o ideal seria 1 , mas toda fez que você ajusta o peso e/ou bias, você adiciona ou remove 1.5, dessa maneira você nunca chegará ao valor ideal, por estar aumentando ou diminuindo constantemente um valor grande. com um valor fracionado, você vai dando passos menores até chegar no ideal.

        delta b(bias) = learning_rate * error;

    */


    //? Output_ERROR = TARGETS - OUTPUTS
    
    // calculate de error hidden -> output
    let output_errors = Matrix.subtract(target, output);

    //calculate gradient hidden -> output
    let gradients = Matrix.map( output, dsigmoid );
    
    gradients.multiply(output_errors)
    gradients.multiply(this.learning_rate);

    
    //calculate deltas hidden -> output
    let weight_ho_deltas = Matrix.multiply(gradients, Matrix.reverse( hidden ))
    
    //adjust the weights and bias by deltas hidden -> output
    this.weight_hidden_output.add(weight_ho_deltas);
    this.bias_o.add(gradients);

    //? Hidden_ERROR = Reverse(weight_hidden_output) * Output_errors
  
    // calculate the error inpust -> hidden
    let hidden_errors = Matrix.multiply(  Matrix.reverse(this.weight_hidden_output) , output_errors  );
    
    //calculate gradient inpust -> hidden
    let hidden_gradient = Matrix.map( hidden , dsigmoid);
    hidden_gradient.multiply(hidden_errors);
    hidden_gradient.multiply(this.learning_rate);
    
    //calculate de deltas inpust -> hidden
    let weight_ih_deltas = Matrix.multiply(hidden_gradient, Matrix.reverse(input));

    //adjust the weights and bias by deltas inpust -> hidden
    this.weight_inputs_hidden.add(weight_ih_deltas)
    this.bias_h.add(hidden_gradient);

    // return output_errors;

}
