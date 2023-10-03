//clase principal biblioteca
import { LibraryItem } from "./claseLibraryItem";
import { User } from "./claseUser";
import { Loan } from "./claseLoan";
import { LoanRecord } from "./registroPrestamos";
import * as fs from "fs";

export class Library {
  private items: LibraryItem[]; //arrays de tipo libraryitem
  private users: User[]; //arrays de tipo user
  private loans: Loan[]; //arrays de tipo loan
  private loanRecords: LoanRecord[]; //lista de registros de préstamos  

  public constructor() {
    //se inicializan vacios para poder agregar los elementos que queremos en el array
    this.items = [];
    this.users = [];
    this.loans = [];
    this.loanRecords = [];
  }

  addItem(item: LibraryItem): void {
    this.items.push(item);
  }
  addUser(user: User): void {
    this.users.push(user);
  }

  loanItem(item: LibraryItem, user: User): void {
    if (!this.isUserValid(user)) {
      console.log("Usuario no registrado");
      return;
    }
    if (user.isCancelled()) {
      console.log("Usuario cancelado");
      return;
    }
    if (user.isPenalized()) {
      console.log("Usuario penalizado");
      return;

    }
    const existingItem: LibraryItem | undefined = this.findItem(item);// indefinido seria porque no se encuentra el item en la biblioteca
    if (!existingItem || !existingItem.isItemAvailable()) //si item no existe o no esta disponible
    {
      console.log("Item no está disponible.");
      return;
    }
    existingItem.markAsUnavailable(); //cambia el estado a false, no esta disponible

    const loan = new Loan(existingItem, user); //creamos nuevo prestamo
    this.loans.push(loan); //cargo el prestamo en el arreglo loan

    //agrega las propiedades de titulo, fecha y nombre a cada prestamo
    this.addLoanRecord(user, existingItem);

    // Guardar registros de préstamos en un archivo
    this.saveLoanRecordsToFile('loanRecords.json');

    console.log(
      `${user.getName()} retira "${item.getTitle()}" con fecha de devolución ${loan
        .getDueDate()
        .toLocaleDateString()}`
    );

  }
  //método para agregar registros de préstamos:
  addLoanRecord(user: User, item: LibraryItem): void {
    const loan = this.findActiveLoan(item, user);
    if (loan) {
      const userName = user.getName();
      const loanTitle = item.getTitle();
      const loanDate = loan.getLoanDate();
      const dueDate = loan.getDueDate();
      const loanRecord = new LoanRecord(userName, loanTitle, loanDate, dueDate);
      this.loanRecords.push(loanRecord);
    }
  }
  //función que convierte los registros de préstamos (loanRecords) en formato JSON y los guarde en un archivo:
  saveLoanRecordsToFile(filename: string): void {
    const data = JSON.stringify(this.loanRecords, null, 2);
    fs.writeFileSync(filename, data, 'utf8');
  }

  // Método para eliminar un libro o revista de la biblioteca
  /* removeItem(item: LibraryItem): void {
    const index = this.items.findIndex((i) => i === item);//se busca el indice del item pasado como argumento en el arreglo de la biblioteca
    //  si el elemento i es igual al item que se pasó como argumento, index almacenará la posición del elemento en el arreglo; de lo contrario, será -1.
    if (index !== -1) { //no es igual a -1, lo que significa que se encontró el item en la biblioteca.
      this.items.splice(index, 1); ///eliminar un elemento en la posición index del arreglo items. El 1 indica que se eliminará solo un elemento en esa posición.
      console.log(`"${item.getTitle()}" ha sido eliminado de la biblioteca.`);
    } else {
      console.log(`"${item.getTitle()}" no se encontró en la biblioteca.`);
    }
  }
 // Método para eliminar un usuario de la biblioteca
 removeUser(user: User): void {
  const index = this.users.findIndex((i) => i === user);
  if (index !== -1) {
    this.users.splice(index, 1);
    console.log(`${user.getName()} ha sido eliminado como usuario de la biblioteca.`);
  } else {
    console.log(`${user.getName()} no se encontró como usuario de la biblioteca.`);
  }
}*/

  //Se puede retirar un item. Si un usuario no está registrado o si el ítem no está disponible la operación se cancela. Se puede devolver un ítem.

  returnItem(item: LibraryItem, user: User, returnDate: Date): void { //fecha de devolucion returndate
    const loan = this.findActiveLoan(item, user);
    if (!loan) {
      console.log("Préstamo no registrado. Revise Título y Usuario");
      return;
    }

    const existingItem = loan.getItem();
    //prestamo registrado marcar como disponible nuevamente
    existingItem.markAsAvailable();

    const dueDate = loan.getDueDate(); //fecha de devolucion esperada

    if (returnDate > dueDate) {      // devolucion tardia
      const lateDays = this.diffDays(returnDate, dueDate);

      if (lateDays > 10) {
        user.markAsCancelled();
        console.log("Usuario cancelado por plazo de penalizacion mayor a 10 dias")
      } else {
        const lateFee = this.calculateScore(lateDays);
        user.increaseScoring(lateFee);
        console.log(`${user.getName()} devolvió "${item.getTitle()}" tarde. Penalización: ${lateFee} puntos.`);

        if (user.getScoring() >= 6) {
          user.markAsPenalized(returnDate); // fecha de devolucion de item
          console.log(" Usuario penalizado por 1 semana queda inhabilitado para retirar items.");
        }
      }


    } else if (user.getScoring() > 0) { //devolucion a tiempo con puntos de score
      user.decreaseScoring(1);
      console.log(`A ${user.getName()} se le desconto 1 punto a su scoring, scoring actual es de:  ${user.getScoring()}`);
    }
    else { // devolucion a tiempo con score en 0
      console.log(`${user.getName()} devolvió "${item.getTitle()}" a tiempo.`)
    }

    this.removeLoan(loan); //elimino el prestamo de la lista de prestamos activos
    console.log(`${user.getName()} devolvió "${item.getTitle()}" en la fecha "${returnDate.toLocaleDateString()}"`);
  }

  //metodos

  private removeLoan(loan: Loan) {
    this.loans = this.loans.filter((resLoan) => resLoan !== loan); // se modifica la lista de arreglos de prestamos, eliminando el prestamo 
    //porque ya se devolvio.
  }

  //metodo para buscar prestamos en el array
  private findActiveLoan(item: LibraryItem, user: User): Loan | undefined {
    return this.loans.find(
      (loan) => loan.getItem() === item && loan.getUser() === user
    );
  }

  //metodo para comprobar si el usuario pepe que quiere un libro o revista lo tenemos como usuario en el arreglo

  private isUserValid(user: User): boolean {
    return this.users.includes(user);
  }
  private findItem(item: LibraryItem): LibraryItem | undefined {
    return this.items.find((i) => i === item);
  }

  private diffDays(returnDate: Date, dueDate: Date): number {
    return Math.ceil((returnDate.getTime() - dueDate.getTime()) / (1000 * 3600 * 24));
  }

  private calculateScore(Days: number): number {
    var score = 0;
    if (Days == 1) {
      score = 2;
    }
    if (Days > 1 && Days < 6) {
      score = 3;
    }
    if (Days > 4 && Days < 11) {
      score = 6;
    }
    return score;
  }

}

