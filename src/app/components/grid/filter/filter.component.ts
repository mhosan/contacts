import { ChangeDetectionStrategy, Component, input, model } from '@angular/core';
import { MatInput } from '@angular/material/input';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [FormsModule, MatFormField, MatLabel, MatInput],
  template: `
    <mat-form-field>
      <mat-label>{{label()}}</mat-label>
      <input matInput type="text" [(ngModel)]="filter" [placeholder]="placeholder()">
    </mat-form-field>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterComponent {
  /**un signal de tipo model permite que se le cambien los valores, a diferencia de los
   * signal de tipo input o output que son de solo lectura
   */
  filter = model('');
  label = input<string>('filtro');
  placeholder = input<string>('Ex. name');

}
