import {Component} from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';

export interface PeriodicElement {
  nombre: string;
  id: number;
  edad: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, nombre: 'Sebastian', edad: 19},
  {id: 2, nombre: 'Eduardo', edad: 19},
  {id: 3, nombre: 'Gerson', edad: 20},
  {id: 4, nombre: 'Edgar', edad: 24},
  {id: 5, nombre: 'Brandon', edad: 18},
  {id: 6, nombre: 'Herlin', edad: 19},
  {id: 7, nombre: 'Cristian', edad: 19},
  {id: 8, nombre: 'Roberto', edad: 20},
  {id: 9, nombre: 'Carlos', edad: 20},
  {id: 10, nombre: 'Diego', edad: 19},
  {id: 11, nombre: 'Quiyuch', edad: 19},
  {id: 12, nombre: 'Sherley', edad: 30},
];

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  displayedColumns: string[] = ['id', 'nombre', 'edad'];
  dataSource = ELEMENT_DATA;
}
