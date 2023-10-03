import { Library } from "./claseLibrary";
import { Book } from "./claseBook";
import { Magazine } from "./claseMagazine";
import { User } from "./claseUser";


//creacion de objetos
const library = new Library();

//comprobacion de usuario

const user01 = new User("Maximiliano Pontin", { street: "Passo", number: 675, apartment: "2" }, "123-444-555");
const user02 = new User("Raul Lopez", { street: "Av. Belgrano", number: 235, apartment: "4C" }, "555-555-555");
console.log("usuario: ", user01.getName());
console.log(user01.getAddress());
user01.setAddress({ ...user01.getAddress(), apartment: "2b" });//el operador de propagación (...),crea una copia modificada de un objeto sin afectar el objeto original.
console.log("address modificated: ", user01.getAddress());



//comprobacion de libro
const book01 = new Book("El tunel", 1948, "Ernesto, Sabato");
book01.markAsUnavailable();//no esta disponible
console.log(book01.isItemAvailable());//muestra que no esta disponible
book01.markAsAvailable();
console.log("Titulo libro: ", book01.getTitle());//mostramos por consola el titulo
book01.setTitle("El tunel 2");//podemos cambiar el titulo del libro aunque sea privado porque lo modificamos desde el metodo publico set
console.log("Titulo modificado a: ", book01.getTitle());//mostramos de nuevo el titulo
console.log("Autor de libro: ", book01.getAuthor());//mostramos autor

//comprobacion de revista
const magazine01 = new Magazine("Caras", 2015, "Hector, Maugeri");
console.log("Titulo de revista: ", magazine01.getTitle());
console.log("Editor de revista", magazine01.getEditor());
console.log("Año de revista: ", magazine01.getYear());//mostramos año de la revista
magazine01.setYear(2018); //modificamos el año de la revista
console.log("Año de revista actualizado a :", magazine01.getYear());

// usuario existe, libro existe. usuario alquila libro, usuario retira  
library.addUser(user02); //agrega usuario 02
library.addItem(book01);
library.loanItem(book01, user02);

//usuario no existe 
library.addUser(user02);
//library.addUser(user01);
library.addItem(magazine01);
library.loanItem(magazine01, user01);

//libro 01 no existe o no esta disponible porque esta en prestamo
library.addItem(magazine01);
library.loanItem(book01, user02);

//devolver libro o revista

const returnDate = new Date(2023,9,11);
library.returnItem(book01, user02, returnDate); // se devuelve el libro un dia despues de la fecha de devolucion

const returnDate2 = new Date(2023,9,12);
library.loanItem (book01, user02);
library.returnItem(book01, user02, returnDate2); // se devuelve el libro 2 dias despues de la fecha

const returnDate3 = new Date(2023,9,8); 
library.loanItem (book01, user02);
library.returnItem(book01, user02, returnDate3); //se devuelve a tiempo

const returnDate4 = new Date(2023,9,17);
library.loanItem (book01, user02);
library.returnItem(book01, user02, returnDate4); //se devuelve  despues de 7 dias de la fecha
library.loanItem (book01, user02);//no me debe dejar retirar el libro 

const returnDate5 = new Date(2023,9,21);
library.loanItem (book01, user02);
library.returnItem(book01, user02, returnDate5); //se devuelve  despues de + de 10 dias de la fecha








