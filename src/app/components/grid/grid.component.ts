import { Component, effect, input, OnInit, signal, viewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { FilterComponent } from './filter/filter.component';



@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [FilterComponent, MatTableModule, MatPaginatorModule, MatSortModule, MatPaginatorModule],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss'
})
export class GridComponent<T> implements OnInit {
  displayedColumns = input.required<string[]>();  //recibo las columnas desde fuera
  data = input.required<T[]>()                    //recibo la data desde fuera
  dataSource = new MatTableDataSource<T>();
  valueToFilter = signal('');
  private readonly _sort = viewChild.required<MatSort>(MatSort);
  private readonly _paginator = viewChild.required<MatPaginator>(MatPaginator);
  constructor() {
    effect(()=>{
      if(this.valueToFilter()){
        this.dataSource.filter = this.valueToFilter();
      }
    }, {allowSignalWrites: true});//allowSignalWrites: true permite modificar la signal dentro del effect, cosa que no está permitida por default.
  }
  ngOnInit(): void {
    this.dataSource.data = this.data();
    this.dataSource.sort = this._sort();
    this.dataSource.paginator = this._paginator();
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase()

  }

}
