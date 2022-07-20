      ******************************************************************
      * Author: THIAGO ARCANJO
      * Date: 20220714
      * Purpose: ESTUDAR COBOL - lER ARQUIVO SEQUENCIAL
      * Tectonics: cobc
      ******************************************************************
       IDENTIFICATION DIVISION.
        PROGRAM-ID. PROG0001.
       ENVIRONMENT DIVISION.
        CONFIGURATION SECTION.

        INPUT-OUTPUT SECTION.
         FILE-CONTROL.
          SELECT IN-FL ASSIGN ".\..\fls\in0002.txt"
          ORGANIZATION IS LINE SEQUENTIAL.
      *   SELECT OUT-FL ASSIGN ''.
       DATA DIVISION.
        FILE SECTION.
         FD IN-FL.
          01 RC.
           02 K                                   PIC 9999 VALUE ZEROS.
           02 VAL.
            03 VAL-01                             PIC 9 OCCURS 10 TIMES.
            03 VAL-03                             PIC 9(10).
            03 VAL-04                             PIC 9(10).
            03 VAL-05                             PIC 9(10).


        WORKING-STORAGE SECTION.
         01 CT-LN                    PIC 9999 VALUE ZEROS.
         01 EOF                      PIC 9    VALUE ZERO.

         01 CASAS                    PIC X(14) OCCURS 10 TIMES.



       PROCEDURE DIVISION.
        000-MAIN.
      *  DISPLAY 'MAIN: PROG0001'.
         PERFORM 100-INIT.
         PERFORM 200-PROCESS.
         PERFORM 300-END.
        100-INIT.
      *  DISPLAY 'INIT: PROG0001'.

        200-PROCESS.
      *  DISPLAY 'PROCESS: PROG0001'.
         OPEN INPUT IN-FL.
         MOVE 0 TO CT-LN.
         PERFORM 201-NEXT-INPUT UNTIL CT-LN>10 OR EOF EQUALS 1.
         CLOSE IN-FL.



        201-NEXT-INPUT.
         READ IN-FL
          AT END
           DISPLAY 'EOF'
           MOVE 1 TO EOF
          NOT AT END

           PERFORM 204-EXTEND-VAL-01
           ADD 1 TO CT-LN
         END-READ.
        204-EXTEND-VAL-01.
         DISPLAY 'EXTENDING' .

         EVALUATE VAL-01(1)



         END-EVALUATE.









        300-END.
         DISPLAY 'END-PROGRAM: PROG0001'.
         STOP RUN.
       END PROGRAM PROG0001.
