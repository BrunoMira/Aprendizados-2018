
Tutorial do vídeo https://www.youtube.com/watch?v=DGxIcDjPzac

Introdução a redes neurais, começando com a ideia de Perceptron

Essa ideai consiste na entrada de 2 dados em apenas 1 neurónio para ver qual será a saída.

Cenário utilizado

entrada x1 e x2 -> Neuronio -> valor de aposta;

Formulá de aprendizado

Erro = valor correto - valor de aposta

pesos[n] = erro * entrada[n] * margem de aprendizado;


se estiver, ótimo.

senão, eu multiplico a diferença entre a saída com a resposta certa e com um Valor de aprendizado.


Valor de aprendizado é uma porcentagem de quanto o neurónio será otimizado, 

pois se eu otimizo usando um valor inteiro, posso ficar sambando entre extremidades e nunca chegar na otimização

ex.  valor ideal = 5 ;

   valor apostado = 1;

   aplicando a aprendizagem = + 10;

   valor apostado 11

   aplicando a aprendizagem = - 10

   e assim por diante, logo uma porcetagem do valor me dá um valor de aprendizagem mais próximo do valor ideal;


