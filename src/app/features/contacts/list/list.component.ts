import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { GridComponent } from '@components/grid/grid.component';
import { ColumnKeys, Contact } from '../contact.interfaces';
import { ContactService } from '../contact.service';
import { tap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [GridComponent],
  template: `
      <section>
       
          <app-grid [displayedColumns]="displayedColumns" [data]="contacts()" [sortableColumns]="sortables"/>
        
      </section>
  `,
  styles: ``
})
export class ListComponent implements OnInit{
  contacts = signal<Contact[]>([]);
  //data!: Contact[];  //! es para avisar que este valor no será nulo ni indefinido.
  displayedColumns: ColumnKeys<Contact> = ['id', 'name', 'phone', 'email', 'action']; //enviar las columnas al componente tabla
  sortables: ColumnKeys<Contact> = ['id', 'name', 'phone', 'email'];

  private readonly _contactSvc = inject(ContactService);
  private readonly _destroyRef = inject(DestroyRef);

  ngOnInit():void {
    this.getAllContacts();
  }

  getAllContacts(){
    this._contactSvc.getAllContacts()
      .pipe(
        takeUntilDestroyed(this._destroyRef),/**operador nuevo para des suscribirse de un observable y evitar fugas de memoria */
        tap((contacts:Contact[]) => this.contacts.set(contacts))
      )
      .subscribe()
  }
}


