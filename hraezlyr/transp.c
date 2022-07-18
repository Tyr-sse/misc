//C:\Users\HP\misc\hraezlyr
#include <stdio.h>
int main(){
	FILE *w=fopen("hra.c","w");
	int i,i0,i1,i2,i3,i4,i5,i6,i7,i8,i9;
	char c = 0;
	i = 0;
	while(i<100 && scanf("%c",&c)!=EOF){
		printf("> '%c'",c);
		fprintf(w,"%c",c);
		
		i++;
	}
	fclose(w);
	
	
	return 0;
}