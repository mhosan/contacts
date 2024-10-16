import { Component, inject, OnInit } from '@angular/core';
import { MatLabel, MatFormField } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog'
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactService } from '@features/contacts/contact.service';
import { ModalService } from './modal.service';
import { APP_CONSTANTS } from '@shared/constants';
import { MatButtonModule } from '@angular/material/button';
import { SnackBarService } from '@shared/services/snack-bar.service';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [ReactiveFormsModule, MatLabel, MatFormField, MatInput, MatDialogModule, MatButtonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent implements OnInit {
  contactForm!: FormGroup;

  private readonly _fb = inject(FormBuilder);
  private readonly _matDialog = inject(MAT_DIALOG_DATA);
  private readonly _contactSvc = inject(ContactService);
  private readonly _modalSvc = inject(ModalService);
  private readonly _snackBar = inject(SnackBarService);

  ngOnInit(): void {
    this._buildForm();
    this.contactForm.patchValue(this._matDialog.data);
    /* if (this._matDialog.isEditing) {
      this._disabledForm();
    } */
  }

  async onSubmit() {
    let message = APP_CONSTANTS.MESSAGES.CONTACT_UPDATED;
    if (this._matDialog.data) {
      this._contactSvc.updateContact(this._matDialog.data.id, this.contactForm.value);
    } else {
      await this._contactSvc.newContact(this.contactForm.value);
      message = APP_CONSTANTS.MESSAGES.CONTACT_ADDED;
    }

    this._snackBar.showSnackBar(message);
    //console.log(message);
    this._modalSvc.closeModal();
  }

  getTitle(): string {
    return this._matDialog.data ? 'Edit Contact' : 'Add Contact';
  }

  /* private _disabledForm(): void {
    this.contactForm.disable();
  } */

  private _buildForm(): void {
    this.contactForm = this._fb.nonNullable.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required]
    });
  }

}
