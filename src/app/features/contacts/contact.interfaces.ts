import { Timestamp } from "@angular/fire/firestore";

/**
 * `keyof T`: Este es un operador de TypeScript que toma todas las propiedades (o claves) del tipo `T`
 *  y crea un tipo unión de ellas.
 * `Array<...>`: Esto indica que estamos creando un array de esos tipos de claves
 * Esta línea está definiendo un nuevo tipo llamado `ColumnKeys` que es un array de las claves de 
 * cualquier tipo `T` que se le proporcione
 */
export type ColumnKeys<T> = Array<keyof T>;

export interface Contact {
    id: number;
    name: string;
    email: string;
    phone: string;
    action: string;
    created: Timestamp;
    updated: Timestamp;
}