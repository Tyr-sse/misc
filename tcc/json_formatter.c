#include <stdio.h>
int main () {
    //printf("teste");
    int i = 0,j;
    char c='a';
    char skip = 0;
    char lp = 0;
    char indT = 0;
    FILE *fptr = fopen("formated_json_file.json","w");
	//fputs("Hello File",out);
    //fputs("Hello File",out);
    if(fptr == NULL)
    {
        printf("\n\nError Reading!");   
        exit(1);             
    }
	
    //while(EOF!=scanf("%c",&c) && i<20000){
    while(EOF!=scanf("%c",&c)){
        
        if(c==34) 
            skip != skip;
        if(skip && c==' ') continue; 
        
        fprintf(fptr,"%c",c);
        if(c=='\n')
            for(j=0;j<indT;j++){fprintf(fptr,"%c",9);}
        switch(c){
            case ',':
            case '{':
            case '}':
            case '[':
            case ']':
                fprintf(fptr,"\n");
                for(j=0;j<indT;j++){fprintf(fptr,"%c",9);}
                break;
        }
        if((c=='[')||(c=='(')||(c=='{')) indT ++;
        if((c==']')||(c==')')||(c=='}')) indT--;        
        i++;
        lp++;
    }
    fclose(fptr);
    return 0;
}