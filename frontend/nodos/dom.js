const para = document.getElementById("quinto");
const cuerpo = document.querySelector("body");
const arti = document.createElement ("Article");
const ttl = document.createElement ("h1");
const p = document.createElement ("p");

ttl.textContent = "como crear un elemento html desde javascript";
p.textContent =
"lorem ipsum dolor sit amet, con";
 arti.appendChild(ttl);
 arti.appendChild(p);

 cuerpo.appendChild(arti);

 const paraContainer = document.querySelector ("section");
 console.log (paraContainer.children);
 console.log (paraContainer.parentElement);
 console.log (paraContainer.parentNode);
