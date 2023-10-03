//clase destinada a prestar o alquilar libro o revista
import { randomUUID as uid } from "node:crypto";
import { LibraryItem } from "./claseLibraryItem";
import { User } from "./claseUser";

export class Loan {
  private id: string = uid();
  private item: LibraryItem;//es de tipo libraryitem
  private user: User;// es de tipo user
  private loanDate: Date; //fecha de prestamo
  private dueDate: Date;//fecha de devolucion

  constructor(item: LibraryItem, user: User) {
    this.item = item;
    this.user = user;
    this.loanDate = new Date();
    this.dueDate = new Date();
    this.dueDate.setDate(this.loanDate.getDate() + 7); //a la fecha de prestamo le sumamos 7 dias que son los dias para su devolucion
  }
  //ponemos los metodos por separado, porque quizas necesitemos buscar solo una informacion y ejecutamos esa funcion 
  getId(): string {
    return this.id;
  }
  getItem(): LibraryItem {
    return this.item;
  }
  getUser(): User {
    return this.user;
  }
  getLoanDate(): Date {
    return this.loanDate;
  }
  getDueDate(): Date {
    return this.dueDate;
  }
}