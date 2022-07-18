      ******************************************************************
      * Author: THIAGO ARCANJO
      * Date: 20220718
      * Purpose: ESTUDAR COBOL - CHAMAR OUTRO PROGRAMA
      * LINKAGE HANDLER 0001
      * Tectonics: cobc
      ******************************************************************
       IDENTIFICATION DIVISION.
        PROGRAM-ID. LHDR0001.
       ENVIRONMENT DIVISION.
        CONFIGURATION SECTION.

        INPUT-OUTPUT SECTION.
         FILE-CONTROL.


       DATA DIVISION.

        WORKING-STORAGE SECTION.
         01 CT.
          03 CT-01                   PIC 99  VALUE ZEROS.
          03 CT-02                   PIC 99  VALUE ZEROS.
          03 CT-03                   PIC 99  VALUE ZEROS.
          03 CT-04                   PIC 99  VALUE ZEROS.
          03 CT-001                  PIC 999 VALUE ZEROS.
         01 SUB-01 PIC X(32).




       PROCEDURE DIVISION.
        000-MAIN.
         DISPLAY 'MAIN: LHDR0001'.
         PERFORM 100-INIT.
         PERFORM 200-PROCESS.
         PERFORM 300-END.
        100-INIT.
         DISPLAY 'INIT: LHDR0001'.
        200-PROCESS.
         DISPLAY 'CALL LHDR0002'.
         MOVE './LHDR0002' TO SUB-01.
         CALL SUB-01.
         DISPLAY 'BACK TO LHDR0001'.
        300-END.
         DISPLAY 'END-PROGRAM: LHDR0001'.

         STOP RUN.
       END PROGRAM LHDR0001.
