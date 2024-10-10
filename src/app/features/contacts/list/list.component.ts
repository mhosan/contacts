import { Component, inject } from '@angular/core';
import { GridComponent } from '@components/grid/grid.component';
import { ColumnKeys, Contact } from '../contact.interfaces';
import { ContactService } from '../contact.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [GridComponent],
  template: `
      <section>
        @if (data){
          <app-grid [displayedColumns]="displayedColumns" [data]="data" [sortableColumns]="sortables"/>
        }
      </section>
  `,
  styles: ``
})
export class ListComponent {
  data!: Contact[];  //! es para avisar que este valor no será nulo ni indefinido.
  displayedColumns: ColumnKeys<Contact> = ['id', 'name', 'phone', 'email', 'action']; //enviar las columnas al componente tabla
  sortables: ColumnKeys<Contact> = ['id', 'name', 'phone', 'email'];

  private readonly _contactSvc = inject(ContactService);

  getAllContacts(){
    this._contactSvc.getAllContacts()
      .pipe(
        tap((contacts:Contact[]) => this.data = [...contacts])
      )
      .subscribe()
  }
}