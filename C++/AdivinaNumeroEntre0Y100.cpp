#include <iostream>
#include <cstdlib>
using namespace std;

int main(void) {
	//Creo un numero random entre 0 y 100
    int number;
	number = rand() % 100;
	//Creo un contador de intentos:
	int counter = 0;
	//Utilizo una flag para cambiar si se adivino el numero:
	bool adivino = true;
	
	//Logica para adivinar el numero:
	while(adivino){
		//Recibo numero del usuario
		int input_number;
		cout<< "Introduce numero: ";
		cin>>input_number;
		cout<<"\n";
		//Comparo con el numero a adivinar, si adivina, salgo del loop
		if(input_number == number){
			adivino = false;
		}
		//Si el numero es mas grande, aumento el contador de intentos e imprimo "Menor"
		else if(input_number > number){
			counter++;
			cout<<"Menor"<<endl;
		}
		//Si el numero es mas chico, aumento el contador de intentos e imprimo "Mayor"
		else if(input_number < number){
			counter++;
			cout<<"Mayor"<<endl;
		}
	}
	cout<<"Acertaste! Lo adivinaste en "<< counter << " intentos!"<<endl;
    return 0;
}