#include <stdint.h>
#include <string>

class comunicacion_serie {
    public:
        uint16_t* get_secuencia();
        BYTE GetChecksum(char *pStr);
        /*
            Aca pondria las funciones para configurar la comunicacion:
            void set_baudios(int bad_rate);
            void set_COM(char com);
            etc
            Tambien las funciones para obtener los mismos datos
            int get_baudios();
            char get_COM();
            etc
        */
       void enviar_trama(string mensaje);
       string recibir_trama();
       
    private:
        uint16_t secuencia = 0
        uint16_t *secPtr = &secuencia;
        char COM = "COM1";
        int baudios = 9600;
        int cantidad_bits = 8;
        bool paridad = false;
        int bit_stop = 1;
};

uint16_t *get_secuencia(){
    return secPtr;
}

void comunicacion_serie::enviar_trama(string mensaje){
    uint8_t SOH = 0x01;
    uint8_t STX = 0x02;
    uint8_t ETX = 0x03;
    unsigned char tipo_mensaje = "L";
    uint16_t *secuencia = get_secuencia();
    string msg = mensaje;
    uint16_t largo = msg.size();
    unsigned char checksum = GetChecksum(&msg);

    cout<< SOH << tipo_mensaje << STX << *secuencia << largo << msg << checksum << ETX;
    *secuencia++;
}

string comunicacion_serie::recibir_trama(void){
    uint8_t SOH;
    uint8_t STX;
    uint8_t ETX;
    unsigned char tipo_mensaje;
    uint16_t secuencia;
    string msg;
    uint16_t largo;
    unsigned char checksum;

    cin<< SOH << tipo_mensaje << STX << secuencia << largo << msg << checksum << ETX;
    /*
        Aca habria algun algoritmo de chequeo con el checksum
        y otras medidas de seguridad con los bytes recibidos.
    */
    return msg;
}
/*
    Dependiendo del micro utilizado, se utilizan las herramientas del mismo
    para configurar puertos de entrada/salida, asignar las configuraciones
    y luego enviar/recibir las tramas por el medio correspondiente.
    En este caso, tomo valores de la consola e imprimo en pantalla los
    bytes enviados.
*/