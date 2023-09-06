/*Definición del problema: Sistema de Gestión de Biblioteca
Crear un sistema de gestión de biblioteca que permita administrar libros, revistas y usuarios de la biblioteca. Los libros y revistas tienen propiedades como título, autor/editor, y año de publicación. Los usuarios de la biblioteca tienen propiedades como nombre, dirección y número de teléfono. El sistema debe permitir realizar préstamos y devoluciones de libros y revistas.
LibraryItem, Book y Magazine representan elementos de la biblioteca, como libros y revistas, y sus respectivas propiedades.
User representa un usuario de la biblioteca con propiedades como nombre, dirección y número de teléfono.
Loan representa un préstamo de un elemento de la biblioteca a un usuario.
Library es el sistema de gestión de la biblioteca que administra los elementos, los usuarios y los préstamos. Puede agregar elementos y usuarios, realizar préstamos y devoluciones, y mostrar préstamos activos. (editado) */

class LibraryItem {
private title: string;
private year: number;
public constructor(title:string, year:number) {
    this.title = title;
    this.year = year; 
}

getTitle (): string {
    return this.title;
}
 getYear(): number {
    return this.year;
 }
}

class Book extends LibraryItem {
private author: string [];
public constructor ( title:string, year:number, author:string []) {
    super (title, year);
this.author = author;
}
getAuthor (): string [] {
    return this.author;
}
}

class Magazine extends LibraryItem {
    private editor: string;
    public constructor ( title:string, year: number, editor:string){
super (title, year);
this.editor = editor;

    }

getEditor():string {
    return this.editor;
}
}

class User {
private name: string;
private adress: string;
private phoneNumber: number;
public constructor (name:string, adress:string, phoneNumber:number){
    this.name= name;
    this.adress=adress;
    this.phoneNumber=phoneNumber;
}

getName (): string {
    return this.name;
}
getAdress():string {
    return this.adress;
}
getPhoneNumber(): number {
    return this.phoneNumber;
}
}

class Loan {
private Item:LibraryItem;
private user: User;
private fechaVenc: Date;

public constructor (Item: LibraryItem, user: User, fechaVenc:Date){
this.Item= Item;
this.user= user;
this.fechaVenc=fechaVenc;
}

}

class Library{}