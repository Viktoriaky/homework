import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  element: Element[]
  
  ;
}
export interface Element {
  firstName: string;
  lastName: string;
  birthDate: number;
}


const Element = [
  {firstName: 'Вика', lastName: 'К', birthDate: '25.05.1997'},
  {firstName: 'Жека', lastName: 'В', birthDate: '31.01.1865'},
  {firstName: 'Пекка', lastName: 'H', birthDate: '6.03.2005'},
  
];