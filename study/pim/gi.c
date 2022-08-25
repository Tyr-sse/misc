#include <stdio.h>

int main(){
    char inp_01[65];
    char inp_02[65];
    
    printf("\n LOGIN:");
    scanf("%s", &inp_01);
    printf("\n SENHA:");
    scanf("%s", &inp_02);
    printf("\n\n ENVIANDO DADOS PARA AUTH: %s %s", inp_01, inp_02);
    


    return 0;
}