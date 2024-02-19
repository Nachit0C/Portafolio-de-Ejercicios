from random import randint

#Creo un numero random entre 0 y 100
number = randint(0, 100)
#//Creo un contador de intentos:
counter = 0
#//Utilizo una flag para cambiar si se adivino el numero:
adivino = True

#//Logica para adivinar el numero:
while(adivino):
#//Recibo numero del usuario
    input_number = int(input("Introduce numero: "))
    #//Comparo con el numero a adivinar, si adivina, salgo del loop
    if(input_number == number):
        adivino = False
    #//Si el numero es mas grande, aumento el contador de intentos e imprimo "Menor"
    elif(input_number > number):
        counter += 1
        print("Menor")
    #//Si el numero es mas chico, aumento el contador de intentos e imprimo "Mayor"
    elif(input_number < number):
        counter += 1
        print("Mayor")

print("Acertaste! Lo adivinaste en ", counter , " intentos!")
