import { inject, Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';

@Injectable({providedIn: 'root'})
export class ContactService {
    private readonly _firestore = inject(Firestore);
}
