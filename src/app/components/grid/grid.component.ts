import { Component, input, OnInit, viewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';



@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, MatSortModule],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss'
})
export class GridComponent<T> implements OnInit {
  /* displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
 */

  displayedColumns = input.required<string[]>();  //recibo las columnas desde fuera
  data = input.required<T[]>()                    //recibo la data desde fuera
  dataSource = new MatTableDataSource<T>();
  private readonly _sort = viewChild.required<MatSort>(MatSort);

  ngOnInit(): void {
    this.dataSource.data = this.data();
    this.dataSource.sort = this._sort();
  }

}
