//clase revista hereda de la superclase libraryItem
import { LibraryItem } from "./claseLibraryItem";
export class Magazine extends LibraryItem {
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
