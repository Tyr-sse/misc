      ******************************************************************
      * Author: THIAGO ARCANJO
      * Date: 20220714
      * Purpose: ESTUDAR COBOL - ESCREVER ARQUIVO SEQUENCIAL
      * Tectonics: cobc
      ******************************************************************
       IDENTIFICATION DIVISION.
        PROGRAM-ID. FHDR0004.
       ENVIRONMENT DIVISION.
        CONFIGURATION SECTION.

        INPUT-OUTPUT SECTION.
         FILE-CONTROL.

          SELECT IN-FL ASSIGN ".\..\fls\in0001.txt"
           ORGANIZATION IS LINE SEQUENTIAL.
          SELECT OUT-FL ASSIGN ".\..\fls\out0004.txt"
           ORGANIZATION IS LINE SEQUENTIAL.
      *   SELECT OUT-FL ASSIGN ''.
       DATA DIVISION.
        FILE SECTION.
         FD OUT-FL.
         01 OUT-REC.
           03 LN                    PIC 9999.
           03 FILLER                    PIC XXX VALUE ' : '.
           03 D                     PIC 99.
           03 FILLER                    PIC X VALUE '/'.
           03 M                     PIC 99.
           03 FILLER                    PIC X VALUE '/'.
           03 Y                     PIC 9999.
         FD IN-FL.
          01 IN-RC.
           03 RC-DT.
            04 RC-DT-Y               PIC 9999 VALUE ZEROS.
            04 RC-DT-M               PIC 99   VALUE ZEROS.
            04 RC-DT-D               PIC 99   VALUE ZEROS.

           03 FILLER                 PIC X.
           03 RC-DESC.
            04 RC-DESC-A             PIC X(64).
            04 RC-DESC-B             PIC X(64).

        WORKING-STORAGE SECTION.
         01 CT.
          03 CT-01                   PIC 99  VALUE ZEROS.
          03 CT-02                   PIC 99  VALUE ZEROS.
          03 CT-03                   PIC 99  VALUE ZEROS.
          03 CT-04                   PIC 99  VALUE ZEROS.
          03 CT-001                  PIC 999 VALUE ZEROS.




       PROCEDURE DIVISION.
        000-MAIN.
         DISPLAY 'MAIN: FHDR0004'.
         PERFORM 100-INIT.
         PERFORM 200-PROCESS.
         PERFORM 300-END.
        100-INIT.
         DISPLAY 'INIT: FHDR0004'.

        200-PROCESS.
         DISPLAY 'PROCESS: FHDR0004'.
         OPEN INPUT IN-FL.
         OPEN OUTPUT OUT-FL.
         MOVE 1     TO CT-01.
         MOVE ZEROS TO CT-02.
         DISPLAY ' START'.
         PERFORM 205-PROCESS-LINE
          UNTIL CT-01 EQUALS 1000 OR
                CT-02 EQUALS 1.
         DISPLAY ' FINISH'.
         205-PROCESS-LINE.
         ADD 1 TO CT-01.
          READ IN-FL
           AT END
            MOVE 1 TO CT-03
           NOT AT END
            MOVE 0 TO CT-03
            PERFORM  206-MOUT-OUT-REC
          END-READ.



          206-MOUT-OUT-REC.
           STRING
            CT-01 DELIMITED BY SIZE
            ' : ' DELIMITED BY SIZE
            RC-DT-D DELIMITED BY SIZE

            '/' DELIMITED BY SIZE
            RC-DT-M DELIMITED BY SIZE
            '/' DELIMITED BY SIZE
            RC-DT-Y DELIMITED BY SIZE
           INTO OUT-REC.
           WRITE OUT-REC.



        300-END.
         DISPLAY 'END-PROGRAM: FHDR0004'.

         STOP RUN.
       END PROGRAM FHDR0004.
