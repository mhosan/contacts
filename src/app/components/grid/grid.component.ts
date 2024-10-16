import { Component, effect, inject, input, OnInit, signal, viewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { FilterComponent } from './filter/filter.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { APP_CONSTANTS } from '@shared/constants';
import { ContactService } from '@features/contacts/contact.service';
import { ModalService } from '@components/modal/modal.service';
import { ModalComponent } from '@components/modal/modal.component';
import { SnackBarService } from '@shared/services/snack-bar.service';


@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [FilterComponent, MatTableModule, MatPaginatorModule, MatSortModule, MatPaginatorModule, MatButtonModule, MatIconModule],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss'
})
export class GridComponent<T> implements OnInit {
  displayedColumns = input.required<string[]>();  //recibo las columnas desde fuera
  data = input.required<T[]>()                    //recibo la data desde fuera
  sortableColumns = input<string[]>([]);
  dataSource = new MatTableDataSource<T>();
  valueToFilter = signal('');
  private readonly _sort = viewChild.required<MatSort>(MatSort);
  private readonly _paginator = viewChild.required<MatPaginator>(MatPaginator);
  private readonly _contactSvc = inject(ContactService);
  private readonly _modalSvc = inject(ModalService);
  private readonly _snackBar = inject(SnackBarService);

  constructor() {
    effect(()=>{
      if(this.valueToFilter()){
        this.dataSource.filter = this.valueToFilter();
      } else {
        this.dataSource.filter = '';
      }

      if(this.data()){
        this.dataSource.data = this.data();
      }
    }, {allowSignalWrites: true});//allowSignalWrites: true permite modificar la signal dentro del effect, cosa que no está permitida por default.
  }
  ngOnInit(): void {
    this.dataSource.data = this.data();
    this.dataSource.sort = this._sort();
    this.dataSource.paginator = this._paginator();
  }

  openEditForm(data: T):void {
    this._modalSvc.openModal<ModalComponent, T>(ModalComponent, data, true);
  }

  selectRow(data: T): void{
    this.openEditForm(data);
  }

  deleteContact(id: string): void{
    const confirmation = APP_CONSTANTS.MESSAGES.CONFIRMATION_PROMPT;
    if(confirmation){
      this._contactSvc.deleteContact(id);
      this._snackBar.showSnackBar(APP_CONSTANTS.MESSAGES.CONTACT_DELETED);
    }
  }

}
