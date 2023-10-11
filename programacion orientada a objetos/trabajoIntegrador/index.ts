import { Library } from "./claseLibrary";
import { Book } from "./claseBook";
import { Magazine } from "./claseMagazine";
import { User } from "./claseUser";

const today = new Date(2023, 9, 10);

//creacion de objetos
const library = new Library();

//creacion de usuario

const user01 = new User("Maximiliano Pontin", { street: "Passo", number: 675, apartment: "2" }, "123-444-555");
const user02 = new User("Raul Lopez", { street: "Av. Belgrano", number: 235, apartment: "4C" }, "555-555-555");
console.log("usuario 1: ", user01.getName());
console.log("usuario 2: ", user02.getName());

//modificar direccion de usuario
console.log("direccion actual: ", user01.getAddress());

user01.setAddress({ ...user01.getAddress(), apartment: "2b" });//el operador de propagación (...),crea una copia modificada de un objeto sin afectar el objeto original.
console.log("address modificated: ", user01.getAddress());


//agregar usuario
library.addUser(user01);
library.addUser(user02);
//listar usuarios
library.listUsers();

//const book03 = new Book("El Principito", 1943, "Antoine De Saint-Exupery");
//library.addItem(book03);
//library.loanItem(book03, user01); //si el usuario tiene un prestamo debe eliminar el prestamos de la lista

//eliminar usuario
library.removeUser(user01);

//listar usuarios
library.listUsers();

//creacion de libro

const book01 = new Book("El tunel", 1948, "Ernesto, Sabato");
book01.markAsUnavailable();//no esta disponible
book01.markAsAvailable();
console.log("libro disponible: ", book01.isItemAvailable());

///modificar titulo de libro
console.log("Titulo libro: ", book01.getTitle());//mostramos por consola el titulo
book01.setTitle("El tunel final");//podemos cambiar el titulo del libro aunque sea privado porque lo modificamos desde el metodo publico set
console.log("Titulo modificado a: ", book01.getTitle());//mostramos de nuevo el titulo
console.log("Autor de libro: ", book01.getAuthor());//mostramos autor

//agregar 
library.addItem(book01);

//comprobacion de revista
const magazine01 = new Magazine("Caras", 2015, "Hector, Maugeri");
console.log("Titulo de revista: ", magazine01.getTitle());
console.log("Editor de revista", magazine01.getEditor());
console.log("Año de revista: ", magazine01.getYear());//mostramos año de la revista

//modificamos el año de la revista
magazine01.setYear(2018);
console.log("Año de revista actualizado a :", magazine01.getYear());

//agregar magazine
library.addItem(magazine01);

//listar items
library.listItems();

//eliminar book
library.removeItem(book01);

//eliminar magazine
library.removeItem(magazine01);

//listar nuevamente 
library.listItems();


//validacion de prestamo: 

// usuario existe, libro existe. usuario alquila libro, usuario retira  
library.addUser(user02); //agrega usuario 02
library.addUser(user01); //agrega usuario
library.addItem(book01);
//library.addItem(magazine01);
library.loanItem(book01, user02); //


//usuario no existe 
library.removeUser(user02);
library.addUser(user01);
library.addItem(magazine01);
library.loanItem(magazine01, user02);


//item no existe o no esta disponible porque esta en prestamo
library.addItem(magazine01);
library.loanItem(book01, user02);


//validacion devolucion de libro o revista

library.addUser(user02); //agrega usuario 02
library.addItem(book01);
library.addItem(magazine01);

//se devuelve a tiempo
library.loanItem(book01, user02, today);
const returnDate = new Date(2023, 9, 11);
library.returnItem(book01, user02, returnDate);


// Se devuelve el libro un dia despues de la fecha de devolucion
library.loanItem(book01, user02, today);
const returnDate2 = new Date(2023, 9, 18);
library.returnItem(book01, user02, returnDate2);


// Se devuelve el libro 2 dias despues de la fecha
library.loanItem(magazine01, user02, today);
const returnDate3 = new Date(2023, 9, 19);
library.returnItem(magazine01, user02, returnDate3);


//Devolucion 5 dias tarde, acumula mas de 6 puntos de scoring, penalizado.
library.loanItem(book01, user02, today);
const returnDate4 = new Date(2023, 9, 22);
library.returnItem(book01, user02, returnDate4); // 
const loanDate = new Date(2023, 9, 25); // fecha de segundo prestamo
library.loanItem(book01, user02, loanDate);//nuevo prestamo estando penalizado, no me debe dejar retirar el libro hasta despues del 28


// Se devuelve  despues de + de 10 dias de la fecha
library.loanItem(magazine01, user01);
const returnDate5 = new Date(2023, 9, 30);
library.returnItem(magazine01, user01, returnDate5);  // usuario cancelado
library.loanItem(book01, user01);//no puede retirar items


//eliminar prestamo
library.loanItem(book01, user02);
library.loanItem(book01, user01);
library.removeLoan(book01, user02);

// registro de prestamos

library.printLoanRecords();


