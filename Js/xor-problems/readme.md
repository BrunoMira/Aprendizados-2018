Tutorial em  https://www.youtube.com/watch?v=188B6k_F9jU

Estudo em redes neurais, no estilo Aprendizado supervisionado , onde eu sei qauis são as entradas e quais devem ser as saídas, 

assim eu digo se a resposta da rede está certa ou não.

Problema XOR

Esse problema consiste na dificuldade de traçar uma linha entre os grupos.

Em uma rede neural com apenas 1 neurónio, e com entradas de valores lógicos, 

teremos saidas paseadas em 0's ou 1's , assim poderiamos traçar uma linha separando os dois grupos.

Mas no problema xor, não existe uma forma de separar os grupos com apenas uma linha no plano cartesiano de duas dimensões.

se você pensar no plano cartesiano onde cada extremidade seria a responsa de uma operação lógica teriamos

AND

(0 , 0)False                     False(1, 0)


(0, 1)False                      True(1, 1)

OR
(0 , 0)False                     True(1, 0)


(0, 1)True                      True(1, 1)

XOR
(0 , 0)False                     True(1, 0)


(0, 1)True                      False(1, 1)

No plano AND e OR, eu consigo dividir os grupos(false e true), com uma linha.


No XOR , eu não consigo separar os grupos com uma linha, para poder dividi-los preciso de duas linhas ou de um plnao de 3 dimensões, e isso só é possível ser representado por mais de 1 neurónio.