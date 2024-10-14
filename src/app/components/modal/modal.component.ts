import { Component } from '@angular/core';
import { MatLabel, MatFormField} from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatDialogContent } from '@angular/material/dialog'

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [MatLabel, MatFormField, MatInput, MatDialogContent],
  templateUrl: './modal.component.html',
  styles: ``
})
export class ModalComponent {

}
