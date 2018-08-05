import { Component } from '@angular/core';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayedColumns = ['position', 'firstName', 'lastName', 'email'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
}

export interface Element {
  position: number;
  firstName: string;
  lastName: string;
  email: string;
}

const ELEMENT_DATA: Element[] = [
  {position: 1, firstName: 'John', lastName: 'Doe', email: 'john@gmail.com'},
  {position: 1, firstName: 'Mike', lastName: 'Hussey', email: 'mike@gmail.com'},
  {position: 1, firstName: 'Ricky', lastName: 'Hans', email: 'ricky@gmail.com'},
  {position: 1, firstName: 'Martin', lastName: 'Kos', email: 'martin@gmail.com'},
  {position: 1, firstName: 'Tom', lastName: 'Paisa', email: 'tom@gmail.com'}
];