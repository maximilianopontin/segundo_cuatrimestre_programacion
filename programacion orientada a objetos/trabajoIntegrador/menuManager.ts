import { User } from "./claseUser";
import { Loan } from "./claseLoan";
import { LibraryItem } from "./claseLibraryItem";
import { Library } from "./claseLibrary";
import { Book } from "./claseBook";
import { Magazine } from "./claseMagazine";
import { LoanRecord } from "./claseLoanRecord";

import * as rs from "readline-sync";

export class MenuManager {

  readLoanRecords() {
    const library = new Library();
    library.printLoanRecords();
    rs.keyInPause();
  }

  createLoan() {
    const library = new Library();
    const user02 = new User("Raul Lopez", { street: "Av. Belgrano", number: 235, apartment: "4C" }, "555-555-555");
    const book01 = new Book("El tunel", 1948, "Ernesto, Sabato");
    library.addUser(user02); //agrega usuario 02
    library.addItem(book01);
    library.loanItem(book01, user02);


    rs.keyInPause();


  }

  deleteLoan() {
    const library = new Library();
    const user02 = new User("Raul Lopez", { street: "Av. Belgrano", number: 235, apartment: "4C" }, "555-555-555");
    const book01 = new Book("El tunel", 1948, "Ernesto, Sabato");
    library.addUser(user02);
    library.addItem(book01);
    library.loanItem(book01, user02);
    library.removeLoan(book01, user02);

    rs.keyInPause();
  }


  readUser() {
    const user01 = new User("Maximiliano Pontin", { street: "Passo", number: 675, apartment: "2" }, "123-444-555");
    const user02 = new User("Raul Lopez", { street: "Av. Belgrano", number: 235, apartment: "4C" }, "555-555-555");
    console.log(user01, user02);

    rs.keyInPause();
  }

  createUser() {
    const library = new Library();
    const user02 = new User("Raul Lopez", { street: "Av. Belgrano", number: 235, apartment: "4C" }, "555-555-555");
    const book01 = new Book("El tunel", 1948, "Ernesto, Sabato");
    library.addUser(user02); //agrega usuario 02
    library.addItem(book01);
    library.loanItem(book01, user02);


    rs.keyInPause();


  }
  updateUser() { }

  deleteUser() {
    const library = new Library();
    const user02 = new User("Raul Lopez", { street: "Av. Belgrano", number: 235, apartment: "4C" }, "555-555-555");
    const book01 = new Book("El tunel", 1948, "Ernesto, Sabato");
    library.addUser(user02);
    library.addItem(book01);
    library.loanItem(book01, user02);
    library.removeLoan(book01, user02);

    rs.keyInPause();
  }

  menuu() {
    while (true) {
      console.clear()
      const choice = rs.keyInSelect(this.menuOptions);
      switch (choice) {

        case 0:
          this.readLoanRecords();
          break
        case 1:
          this.createLoan();
          break
        case 2:
          this.deleteLoan();
          break;

        default:
          console.log("adios");
          return;
      }
    }
  }

  menuOptions = [
    //"Read User", "Create User", "Update User", "Delete Existing User",
    // "Read magazine", " Create Magazine", "Update Magazine" "Delete Magazine", "
    // "Read Book", "Create Book", "Update Book", "Delete Book",
    "Read LoanRecord", "Create Loan", "Delete Existing Loan",

  ]
}
const manager = new MenuManager();
manager.menuu();