//clase libros hereda de la superclase libraryItem
import { LibraryItem } from "./claseLibraryItem";

export class Book extends LibraryItem {
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