      ******************************************************************
      * Author: THIAGO ARCANJO
      * Date: 20220714
      * Purpose: ESTUDAR COBOL - ESCREVER ARQUIVO SEQUENCIAL
      * Tectonics: cobc
      ******************************************************************
       IDENTIFICATION DIVISION.
        PROGRAM-ID. FHDR0002.
       ENVIRONMENT DIVISION.
        CONFIGURATION SECTION.

        INPUT-OUTPUT SECTION.
         FILE-CONTROL.

      *  SELECT OUT-FL ASSIGN "C:\Users\F9329132\misc\operacional\out01.
      *    "txt"
         SELECT OUT-FL ASSIGN ".\..\fls\out0002.txt"
          ORGANIZATION IS LINE SEQUENTIAL
          FILE STATUS IS STTS.
      *   SELECT OUT-FL ASSIGN ''.
       DATA DIVISION.
        FILE SECTION.
         FD OUT-FL.
         01 RCRD-01.
          02 RCRD-ID                 PIC 99.
          02 BD                      PIC X(128).


        WORKING-STORAGE SECTION.
         77 STTS                     PIC 99.
         01 CT.
          03 CT-01                   PIC 99  VALUE ZEROS.
          03 CT-02                   PIC 99  VALUE ZEROS.
          03 CT-03                   PIC 99  VALUE ZEROS.
          03 CT-04                   PIC 99  VALUE ZEROS.
          03 CT-001                  PIC 999 VALUE ZEROS.
         01 DT.
           03 Y                      PIC 9999.
           03 M                      PIC 99.
           03 D                      PIC 99.
           03 H                      PIC 99.
           03 MIN                    PIC 99.
           03 SEC                    PIC 99.
           03 MSEC                   PIC 99.


       PROCEDURE DIVISION.


        000-MAIN.
         DISPLAY 'MAIN: FHDR0001'.
         PERFORM 100-INIT.
         PERFORM 200-PROCESS.
         PERFORM 300-END.


        100-INIT.
         DISPLAY 'INIT: FHDR0001'.

        200-PROCESS.
         DISPLAY 'PROCESS: FHDR0002'.
         PERFORM 201-WRITE-FILE.


        201-WRITE-FILE.
         DISPLAY 'WRT FILE'.
         OPEN OUTPUT OUT-FL.
      *   IF STTS EQUALS 35 THEN
      *    DISPLAY '35'
      *     OPEN OUTPUT OUT-FL
      *     CLOSE OUT-FL
      *     OPEN OUTPUT OUT-FL
      *    END-IF.

         OPEN OUTPUT OUT-FL.
         PERFORM 202-WRITE-LINES.
         CLOSE OUT-FL.


        202-WRITE-LINES.
         MOVE ZEROS TO CT-01.
      *   PERFORM 203-WRITE-LINE UNTIL CT-01 EQUALS 10.
          PERFORM LP-01 UNTIL CT-03 EQUALS 4.
        LP-01.
         DISPLAY 'A ' CT-03.
         ADD 1 TO CT-03.


        203-WRITE-LINE.
          ADD 1 TO CT-01.
          MOVE FUNCTION CURRENT-DATE TO DT.
          MOVE CT-01 TO RCRD-ID.
          STRING
           ': {' D '/' M '/' Y ' - ' H ': ' MIN ': ' SEC ': ' MSEC '}'
           DELIMITED BY SIZE
          INTO BD.
      *   DISPLAY ' RCRD> ' RCRD-01.
      *   MOVE 'DESCRICAO QUALQUER>>'TO DESCR.
          WRITE RCRD-01.




        300-END.
         DISPLAY 'END-PROGRAM: FHDR0001'.
         STOP RUN.
       END PROGRAM FHDR0002.
