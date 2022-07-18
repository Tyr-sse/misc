      ******************************************************************
      * Author: THIAGO ARCANJO
      * Date: 20220718
      * Purpose: ESTUDAR COBOL - SER CHAMADO POR OUTRO PROGRAMA
      * LINKAGE HANDLER 0002
      * Tectonics: cobc
      ******************************************************************

       IDENTIFICATION DIVISION.
        PROGRAM-ID. LHDR0002.
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
        LINKAGE SECTION.
         01 INFO PIC XXX.


       PROCEDURE DIVISION.
        000-MAIN.
         DISPLAY '>>>>>>MAIN: LHDR0002'.
      *  PERFORM 100-INIT.
      *  PERFORM 200-PROCESS.
         PERFORM 300-END.
        100-INIT.
         DISPLAY 'INIT: LHDR0002'.

        200-PROCESS.
         display 'proc'.
        300-END.
         DISPLAY 'END-PROGRAM: LHDR0002'.

         STOP RUN.
       END PROGRAM LHDR0002.
