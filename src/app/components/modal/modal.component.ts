import { Component, inject, OnInit } from '@angular/core';
import { MatLabel, MatFormField} from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog'
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [ReactiveFormsModule, MatLabel, MatFormField, MatInput, MatDialogModule],
  templateUrl: './modal.component.html',
  styles: ``
})
export class ModalComponent implements OnInit {
  contactForm!: FormGroup;

  private readonly _fb = inject(FormBuilder);
  private readonly _matDialog = inject(MAT_DIALOG_DATA);

  ngOnInit(): void {
    this._buildForm();
  }

  getTitle():string{
    return this._matDialog.data? 'Edit Contact' : 'Add Contact';
  }

  private _buildForm(): void {
    this.contactForm = this._fb.nonNullable.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required]
    });
  }

}
