import { Library } from "./claseLibrary";
import { Book } from "./claseBook";
import { Magazine } from "./claseMagazine";
import { User } from "./claseUser";

const today = new Date(2023,9,10);

//creacion de objetos
const library = new Library();

//comprobacion de usuario

const user01 = new User("Maximiliano Pontin", { street: "Passo", number: 675, apartment: "2" }, "123-444-555");
const user02 = new User("Raul Lopez", { street: "Av. Belgrano", number: 235, apartment: "4C" }, "555-555-555");
/*console.log("usuario: ", user01.getName());
console.log(user01.getAddress());
//modificar direccion de usuario
user01.setAddress({ ...user01.getAddress(), apartment: "2b" });//el operador de propagación (...),crea una copia modificada de un objeto sin afectar el objeto original.
console.log("address modificated: ", user01.getAddress());

//agregar y eliminar usuario
library.addUser(user01);
*/const book03 = new Book("El Principito", 1943, "Antoine De Saint-Exupery");
/*library.addItem(book03);
library.loanItem(book03, user01); //si el usuario tiene un prestamo debe eliminar el prestamos de la lista
library.removeUser(user01);



//comprobacion de libro
*/const book01 = new Book("El tunel", 1948, "Ernesto, Sabato");
/*book01.markAsUnavailable();//no esta disponible
console.log(book01.isItemAvailable());//muestra que no esta disponible
book01.markAsAvailable();
//modificar titulo de libro
console.log("Titulo libro: ", book01.getTitle());//mostramos por consola el titulo
book01.setTitle("El tunel 2");//podemos cambiar el titulo del libro aunque sea privado porque lo modificamos desde el metodo publico set
console.log("Titulo modificado a: ", book01.getTitle());//mostramos de nuevo el titulo
console.log("Autor de libro: ", book01.getAuthor());//mostramos autor
//eliminacion de book
library.addItem(book01);
library.removeItem(book01);

//comprobacion de revista
*/const magazine01 = new Magazine("Caras", 2015, "Hector, Maugeri");
/*console.log("Titulo de revista: ", magazine01.getTitle());
console.log("Editor de revista", magazine01.getEditor());
console.log("Año de revista: ", magazine01.getYear());//mostramos año de la revista
 //modificamos el año de la revista
magazine01.setYear(2018);
console.log("Año de revista actualizado a :", magazine01.getYear());

//agregar y eliminar magazine
library.addItem(magazine01);
library.removeItem(magazine01);


//validacion de prestamo: 

// usuario existe, libro existe. usuario alquila libro, usuario retira  
*/library.addUser(user02); //agrega usuario 02
library.addItem(book01);
library.addItem(magazine01);

/*
//usuario no existe 
library.addUser(user02);
library.addItem(magazine01);
library.loanItem(magazine01, user01);

//item no existe o no esta disponible porque esta en prestamo
library.addItem(magazine01);
library.loanItem(book01, user02);

*/
//validacion devolucion de libro o revista
/*
library.addUser(user02); //agrega usuario 02
library.addItem(book01);
library.addItem(magazine01);

const returnDate3 = new Date(2023,9,8); 
library.loanItem (book01, user02,);
library.returnItem(book01, user02, returnDate3); //se devuelve a tiempo

library.loanItem (book01, user02);
const returnDate = new Date(2023,9,15);
library.returnItem(book01, user02, returnDate); // se devuelve el libro un dia despues de la fecha de devolucion

library.loanItem (magazine01, user02);
const returnDate2 = new Date(2023,9,16);
library.returnItem(magazine01, user02, returnDate2); // se devuelve el libro 2 dias despues de la fecha
*/
library.loanItem (book01, user02,today);
const returnDate4 = new Date(2023,9,11);
library.returnItem(book01, user02, returnDate4); // devolucion 5 dias tarde, acumula mas de 6 puntos de scoring, penalizado.

const loanDate = new Date(2023,9,25); // fecha de segundo prestamo
library.loanItem (book01, user02,loanDate);//nuevo prestamo estando penalizado, no me debe dejar retirar el libro 

/*

const returnDate5 = new Date(2023,9,30);//se devuelve  despues de + de 10 dias de la fecha
library.loanItem (magazine01, user02);
library.returnItem(magazine01, user02, returnDate5); 

/*
//eliminar prestamo
library.loanItem(book01, user02);
library.removeLoan(book01, user02);

// registro de prestamos

library.printLoanRecords();



*/