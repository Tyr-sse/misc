      ******************************************************************
      * Author: THIAGO ARCANJO
      * Date: 20220714
      * Purpose: ESTUDAR COBOL - CONVERTER MOEDAS, DADOS INDICES DE CONVERCAO
      * Tectonics: cobc
      ******************************************************************
       IDENTIFICATION DIVISION.
        PROGRAM-ID. CONV0001.
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
         SELECT L-FL ASSIGN ".\..\fls\O0002.txt"
          ORGANIZATION IS LINE SEQUENTIAL
          FILE STATUS IS STTS-LOG.
         SELECT LOG-FL ASSIGN ".\..\fls\LOG.txt"
          ORGANIZATION IS LINE SEQUENTIAL
          FILE STATUS IS STTS-LOG.



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
        FD L-FL.
         01 RCRD-L                                         PIC X(10).

         FD LOG-FL.
         01 LOG-RCRD.
          02 N1                                            PIC 999.
          02 N2                                            PIC 999.
          02 DSCR                                          PIC X(10).


        WORKING-STORAGE SECTION.
         77 STTS-IN                                        PIC 99.
         77 STTS-OUT                                       PIC 99.
         77 STTS-LOG                                       PIC 99.

         77 CT-01                                          PIC 99.
         77 CT-02                                          PIC 99.
         77 CT-03                                          PIC 99.
         77 ERR                                            PIC XXX.

         77 NUM                                            PIC 9(10).
         77 DEN                                            PIC 9(10).
         77 PREV-A                                         PIC 9(10).
         77 PREV-B                                         PIC 9(10).





       PROCEDURE DIVISION.


        000-MAIN.
         DISPLAY 'MAIN: CONV0001'.
         PERFORM 100-INIT.

         OPEN INPUT IN-FL.


         PERFORM 200-PROCESS.

         CLOSE IN-FL.




         PERFORM 300-END.


        100-INIT.
         DISPLAY 'INIT: CONV0001'.
         OPEN EXTEND OUT-FL.
         MOVE ' 123456789 123456789 123456789' TO RCRD-OUT.
         WRITE RCRD-OUT.
         CLOSE OUT-FL.



        200-PROCESS.
         DISPLAY 'PROCESS: CONV0001'.
         MOVE 0 TO CT-02.
         MOVE 1 TO NUM.
         MOVE 1 TO DEN.


         PERFORM 201-PROC-LINE UNTIL CT-01=4 OR ERR='EOF' .


        201-PROC-LINE.
         READ IN-FL
          AT END
           DISPLAY 'EOF, CT-02 = 0'
           MOVE 1 TO CT-02
          NOT AT END
      *    VER SE HÁ NOVIDADE
      *      ADICIONAR NOVIDADE AO FL






      *    VER SE HÁ DUPLICATA
      *      ENCERRAR POR INCONSISTENCIA
      *

           MOVE I-A TO O-A
           MOVE I-B TO O-B
           MOVE I-V TO O-V
         END-READ.
         MOVE 0 TO CT-03.

      *  PERFORM 202-FIND-EXTREME-A 10 TIMES.

      *  OPEN EXTEND OUT-FL.

      *  WRITE RCRD-OUT.
      *  CLOSE OUT-FL.

         ADD 1 TO CT-01.
         MOVE 'NIL' TO ERR.
        202-FIND-EXTREME-A.
         DISPLAY 'FIND EXTREME ' CT-03 '-' ERR.

      *  OPEN EXTEND LOG-FL.
      *  STRING
      *  CT-03 DELIMITED BY SIZE
      *  CT-02 DELIMITED BY SIZE
      *  '_ 123456789 123456789' DELIMITED BY SIZE
      *  INTO LOG-RCRD.
      *  WRITE LOG-RCRD.
      *  CLOSE LOG-FL.

         IF CT-03>10 THEN
          MOVE 'MIT' TO ERR
         END-IF.

         ADD 1 TO CT-03.
        300-END.
         DISPLAY 'END-PROGRAM: CONV0001'.
         STOP RUN.
       END PROGRAM CONV0001.
