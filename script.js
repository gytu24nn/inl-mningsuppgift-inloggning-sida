
let root = document.getElementById("root");

//denna variabel är till för att javascripten ska skriva ut den kod i diven i HTML som har id login.
let login = document.getElementById("login");


//skapar en rubik där det står login. 
let h1 = document.createElement("h1"); 
h1.innerText = "Logga in:"; 
h1.id = "rubik";
// skapar text i html för var användaren ska skriva in användarnamn.
let p1 = document.createElement("p");
p1.innerText = "Användarnamn:"; 
p1.id = "användarNamn";

// skapar text i html för var användaren ska skriva in lösenord.
let p2 = document.createElement("p");
p2.innerText = "lösenord:"
p2.id = "lösenord";

//skapar knappen
let button = document.createElement("button");
let buttonText = document.createTextNode("Logga in!");
button.appendChild(buttonText);

//input field användarnamn.
const inputAnvändarNamn = document.createElement("input");
inputAnvändarNamn.type = "text";

//input field lösenord. 
const inputLösenord = document.createElement("input");
inputLösenord.type = "password"; 


//hård kodning av lösenord och användarnamn. 
const userName = "test";
const userPassword = "1234";


login.appendChild(h1);
login.appendChild(p1);
login.appendChild(inputAnvändarNamn);
login.appendChild(p2);
login.appendChild(inputLösenord);
login.appendChild(button);





