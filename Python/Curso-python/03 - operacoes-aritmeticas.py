
# Adição  +
# Subtração -
# Multiplicação *
# divisão *
# Potenciação **
# Divisão inteira //
# Divisão (resto) %

# letra = input("Digita algo aê: ")

#print('Ola{:=^*20}'.format(letra))

# n1 = int( input("Numero 1: ") )
# n2 = int( input("Numero 2: ") )

# s = n1 + n2
# sub = n1 - n2
# m = n1 * n2
# d = n1 / n2
# dr = n1 // n2
# r = n1 % n2

# print("Soma: {} \nSubtração: {}\nMultiplicação {}\nDivisão: {:.3}\nDivisão intero {}\nResto {}".format(s, sub, m, d, dr, r))

'''
 ======= Desafio 5 =========
 Faça um programa que leia um número inteiro e mostre na tela o seu sucessor e seu antecessor
print("======= Desafio 5 =========")

n1 = int( input("Digite um número: ") )
print("O antecessor é {} , Seu número é {} e seu sucessor é {}".format(n1-1 , n1 , n1+1))

======= Desafio 6 =========
Faça um programa que leia um número e mostre o seu dobro, triplo e sua raiz quadrada


n1 = int( input("Digite um número: ") )

print('Número {} , {}² = {} , {}³ = {}, Raiz = {}'.format(n1, n1 , n1**2 , n1 ,n1**3 , n1**(1/2)) );



======= Desafio 7 =========
 Desenvolva um programa que leia as duas notas de um aluno, calcule e mostra sua média


n1 = float( input("Digite sua primeira nota: ") )
n2 = float( input("Digite sua segunda nota: ") )

print(' Nota 1: {} , Nota 2: {}\n Média: {}'.format(n1, n2, (n1 + n2) / 2) )


======= Desafio 8 =========
Escreva um programa que leia um valor em metros e o exiba em centimetros



metros = float( input("Digite o valor (em metros): ") )

print(" metros: {} , centimetros: {}".format(metros, metros*100));


======= Desafio 9 =========
Faça um rograma que leia um número inteiro qualquer e mostra sua tabuada


numero = int( input("Digite um número inteiro: ") )

print("Tabuado do",numero)
cont = 1
while cont < 11:
    print("{} * {} = {}".format(numero, cont, numero*cont ))
    cont += 1


======= Desafio 10 =========
Crie um programa que leia quanto dinheiro uma pessoa tem na carteira e mostre quantos dólares ela pode comprar. Considere US$1,00 = R$3,27

valor = float( input("Quanto dinheiro você tem? ") )

print("Você pode comprar US${: .3f}".format(valor / 3.27))



======= Desafio 11 =========

Faça um programa que leia a altura e largura de uma parede (em metros) calcule a sua área e a quantidade de tinta necessária para pintá-la, sabendo que cada litro de tinta pinta uma área de 2m².


altura = float( input("Digite a altura da Parede (em metros): ") )
largura = float( input("Digite a largura da Parede (em metros): ") )

area = altura * largura

print("A área da parede é: {:.3f}".format(area));
print("Será preciso {:.3f}lts de tinta para pintar a parede".format(area / 2))


======= Desafio 12 =========
Faça um algoritmo que leia o preço de um produto e mostre o seu preço com 5% de desconto


preco = float( input("Qual é o preço do produto: ") )

print("Para você, exclusivamente, vou dar um desconto de 5%, o preço ficará R${:.3f}".format(preco * (1 - 0.05)))


======= Desafio 13 =========
Faça um algoritmo que leia o salário de um funcionário e mostre seu novo salário, com 15% de autmento



salario = float( input("quanto você recebe? ") )

print("Parabéns, você acaba de receber um aumento de 15%, agora você recebe R${:.3f}".format(salario * 1.15))

'''