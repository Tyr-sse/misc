import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ANGULAR PROJECT 01';
  @Input() text: string = 'CAVALO';
  @Output() saida: string = "XABLAU";


  btnTst(){
    console.log('TESTE');
    
  }

}
