

import { randomUUID as uid } from "node:crypto";//para usarlo tenemos que instalar los tipos de node
//const uniqueId = randomUUID();
//console.log (uniqueId);

//clase base de los items en stock (revistas o libros)
export class LibraryItem {
  private id: string = uid();
  private title: string;
  private year: number;
  private isAvailable: boolean = true;//esta disponible en true, tambien podemos ponerlo en el contructor
  public constructor(title: string, year: number) {
    this.title = title;
    this.year = year;
  }
  //funciones para modificar titulo y año
  public setTitle(title: string): void {
    this.title = title;
  }
  public setYear(year: number): void {
    this.year = year;
  }
  //funciones para mostrar titulo y año
  public getTitle(): string {
    return this.title;
  }
  public getYear(): number {
    return this.year;
  }

  //metodo para saber si un libro o revista esta disponible antes de alquilar 
  public isItemAvailable(): boolean {
    return this.isAvailable;
  }

  //metodo en caso de estar alquilado, hay que marcar como no disponible
  markAsUnavailable() {
    this.isAvailable = false;
  }

  //metodo para cuando lo devuelvan
  markAsAvailable() {
    this.isAvailable = true;
  }
}

