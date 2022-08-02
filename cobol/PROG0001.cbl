      ******************************************************************
      * Author: THIAGO ARCANJO
      * Date: 20220714
      * Purpose: ESTUDAR COBOL - CONVERTER MOEDAS, DADOS INDICES DE CONVERCAO
      * Tectonics: cobc
      ******************************************************************
       IDENTIFICATION DIVISION.
        PROGRAM-ID. PROG0001.
       ENVIRONMENT DIVISION.
        CONFIGURATION SECTION.

        INPUT-OUTPUT SECTION.
         FILE-CONTROL.
         SELECT IN-FL ASSIGN ".\..\fls\I0001.txt"
          ORGANIZATION IS LINE SEQUENTIAL
          FILE STATUS IS STTS-IN.
         SELECT OUT-FL ASSIGN ".\..\fls\O0001.txt"
          ORGANIZATION IS LINE SEQUENTIAL
          FILE STATUS IS STTS-OUT.

       DATA DIVISION.
        FILE SECTION.
         FD IN-FL.
         01 RCRD-IN.
          02 I-A                                           PIC X(10).
          02 I-B                                           PIC X(10).
          02 I-V                                           PIC 9(10).

         FD OUT-FL.
         01 RCRD-OUT.
          02 O-A                                           PIC X(10).
          02 O-B                                           PIC X(10).
          02 O-V                                           PIC 9(10).



        WORKING-STORAGE SECTION.
         77 STTS-IN PIC 99.
         77 STTS-OUT PIC 99.
         77 CT-01 PIC 99.
         77 CT-02 PIC 99.




       PROCEDURE DIVISION.


        000-MAIN.
         DISPLAY 'MAIN: PROG0001'.
         PERFORM 100-INIT.

         OPEN INPUT IN-FL.
         OPEN OUTPUT OUT-FL.

         PERFORM 200-PROCESS.

         CLOSE IN-FL.
         CLOSE OUT-FL.



         PERFORM 300-END.


        100-INIT.
         DISPLAY 'INIT: PROG0001'.



        200-PROCESS.
         DISPLAY 'PROCESS: PROG0001'.
         MOVE 0 TO CT-02.
         PERFORM 201-PROC-LINE UNTIL CT-01=4 OR CT-02=1 .


        201-PROC-LINE.
         READ IN-FL
          AT END
           DISPLAY 'EOF, CT-02 = 0'
           MOVE 1 TO CT-02
          NOT AT END
           MOVE I-A TO O-A
           MOVE I-B TO O-B
           MOVE I-V TO O-V
         END-READ.
         DISPLAY ':' RCRD-OUT.
         WRITE RCRD-OUT.

        ADD 1 TO CT-01.
              300-END.
         DISPLAY 'END-PROGRAM: PROG0001'.
         STOP RUN.
       END PROGRAM PROG0001.
