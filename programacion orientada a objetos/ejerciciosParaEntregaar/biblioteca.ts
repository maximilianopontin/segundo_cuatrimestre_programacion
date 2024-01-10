/*Definición del problema: Sistema de Gestión de Biblioteca
Crear un sistema de gestión de biblioteca que permita administrar libros, revistas y usuarios de la biblioteca. Los libros y revistas tienen propiedades como título, autor/editor, y año de publicación. Los usuarios de la biblioteca tienen propiedades como nombre, dirección y número de teléfono. El sistema debe permitir realizar préstamos y devoluciones de libros y revistas.
LibraryItem, Book y Magazine representan elementos de la biblioteca, como libros y revistas, y sus respectivas propiedades.
User representa un usuario de la biblioteca con propiedades como nombre, dirección y número de teléfono.
Loan representa un préstamo de un elemento de la biblioteca a un usuario.
Library es el sistema de gestión de la biblioteca que administra los elementos, los usuarios y los préstamos. Puede agregar elementos y usuarios, realizar préstamos y devoluciones, y mostrar préstamos activos. (editado) 
Consigna, agregar los siguientes dos manejos de errores (con try y catch) dentro del mismo ejercicio de gestion de biblioteca. Los mismos son:
cuando un usario este penalizado no podra retirar un  item hasta FECHA DE DESPENALIZACION
cuando un usuario quiere retirar un item que no esta disponile, deberia avisar por mensaje, que ese  TITULO no esta dispoible, y que estara disponible a partir de la FECHA DE DEVOLUCION.*/

import { randomUUID as uid } from "node:crypto";//para usarlo tenemos que instalar los tipos de node
//const uniqueId = randomUUID();
//console.log (uniqueId);

interface iAddress {
  street: string;
  number: number;
  apartment: string;
}
//clase base de los items en stock (revistas o libros)
class LibraryItem {
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

//esta clase hereda de la superclase libraryItem
class Book extends LibraryItem {
  private author: string;
  public constructor(title: string, year: number, author: string) {
    super(title, year);//pasamos los parametros de la superclase que estan en el contructor
    this.author = author;
  }
  public setAuthor(author: string): void {
    this.author = author;
  }
  getAuthor() {
    return this.author;
  }
}
//clase revista hereda de la superclase libraryItem
class Magazine extends LibraryItem {
  private editor: string;
  public constructor(title: string, year: number, editor: string) {
    super(title, year);
    this.editor = editor;
  }
  public setEditor(editor: string): void {
    this.editor = editor;
  }
  getEditor() {
    return this.editor;
  }
}

//clase destinada a usuarios, lectores
class User {
  private id: string = uid();
  private name: string;
  private address: iAddress;
  private phoneNumber: string;
  public constructor(name: string, address: iAddress, phoneNumber: string) {
    this.name = name;
    this.address = address;
    this.phoneNumber = phoneNumber;
  }

  public getId(): string {
    return this.id;
  }
  public setName(name: string): void {
    this.name = name;
  }
  public getName(): string {
    return this.name;
  }
  public setAddress(address: iAddress): void {
    this.address = address;
  }
  public getAddress(): iAddress //devuelve el objeto iAddress con sus parametros 
  {
    return this.address;
  }
  public setPhoneNumber(phoneNumber: string): void {
    this.phoneNumber = phoneNumber;
  }
  public getPhoneNumber(): string {
    return this.phoneNumber;
  }
}

//clase para prestar o alquilar libro o revista
class Loan {
  private id: string = uid();
  private item: LibraryItem;
  private user: User;
  private loanDate: Date;
  private dueDate: Date;

  constructor(item: LibraryItem, user: User) {
    this.item = item;
    this.user = user;
    this.loanDate = new Date();
    this.dueDate = new Date();
    this.dueDate.setDate(this.loanDate.getDate() + 7);
  }

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
//clase principal gestora

class Library {
  private items: LibraryItem[];
  private users: User[];
  private loans: Loan[];
  public constructor() {
    this.items = [];
    this.users = [];
    this.loans = [];
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
    const existingItem: LibraryItem | undefined = this.findItem(item);
    if (!existingItem || !existingItem.isItemAvailable()) {
      console.log("Item no está disponible.");
      return;
    }
    existingItem.markAsUnavailable();
    const loan = new Loan(existingItem, user);
    this.loans.push(loan);
    console.log(
      `${user.getName()} retira "${item.getTitle()}" con fecha de devolución ${loan
        .getDueDate()
        .toLocaleDateString()}`
    );
  }
   // Método para eliminar un libro o revista de la biblioteca
   removeItem(item: LibraryItem): void {
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
}

//Se puede retirar un item. Si un usuario no está registrado o si el ítem no está disponible la operación se cancela. Se puede devolver un ítem.

  returnItem(item: LibraryItem, user: User): void {
    const loan = this.findActiveLoan(item, user);
    if (!loan) {
      console.log("Préstamo no registrado. Revise Título y Usuario");
      return;
    }
    const existingItem = this.findItem(item);
    if (existingItem) {
      existingItem.markAsAvailable();
    }
    this.loans = this.loans.filter((l) => l !== loan);
    console.log(`${user.getName()} devolvió "${item.getTitle()}"`);
  }
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
}
const library = new Library();
const book01 = new Book("A sangre fía", 1977, "Rodolfo Walsh");
const magazine01 = new Magazine("Pronto", 2011, "Random House Penguin sarasa");
console.log(book01.isItemAvailable());//muestra si esta disponible
book01.markAsUnavailable();//no esta disponible
console.log(book01.isItemAvailable());//muestra que no esta disponible

console.log (book01.getTitle());//mostramos por consola el titulo
book01.setTitle("a sanfre fria");//podemos cambiar el titulo del libro aunque sea privado porque lo modificamos desde el metodo publico set
console.log(book01.getTitle());//mostramos de nuevo el titulo

const user01 = new User(
  "Marcelo Bettini",
  { street: "Humberto Primo", number: 602, apartment: "1C" },
  "123-444-555"
);
const user02 = new User(
  "Sergio Fino",
  {
    street: "Av. Alicia Moreau de Justo",
    number: 1050,
    apartment: "2B",
  },
  "555-555-555"
);


library.addItem(book01);
library.addItem(magazine01);
library.addUser(user01);
library.loanItem(book01, user01);
library.loanItem(book01, user02); //usuario no registrado
library.addUser(user02); //agrega usuario
library.loanItem(book01, user02); //item no disponible
library.returnItem(book01, user01); //ahora vuelve a estar disponible
library.loanItem(book01, user02); //OK
library.removeItem (book01);
library.removeUser(user01);


