
let root = document.getElementById("root");

//denna variabel är till för att javascripten ska skriva ut den kod i diven i HTML som har id login.
let login = document.getElementById("login");


//skapar en rubik där det står login. 
let h1 = document.createElement("h1"); 
h1.innerText = "Logga in:"; 
h1.id = "rubik";
// skapar text i html för var användaren ska skriva in användarnamn.
let paragrafAnvändarNamn = document.createElement("p");
paragrafAnvändarNamn.innerText = "Användarnamn:"; 
paragrafAnvändarNamn.id = "användarNamn";

// skapar text i html för var användaren ska skriva in lösenord.
let paragrafLösenord = document.createElement("p");
paragrafLösenord.innerText = "lösenord:"
paragrafLösenord.id = "lösenord";

//skapar knappen
let button = document.createElement("button");
button.textContent = "Logga in!";

//input field användarnamn.
const inputAnvändarNamn = document.createElement("input");
inputAnvändarNamn.type = "text";

//input field lösenord. 
const inputLösenord = document.createElement("input");
inputLösenord.type = "password";  


//hård kodning av lösenord och användarnamn. 
const userName = "test";
const userPassword = "1234";

let omDuÄrInloggad = false; 
const checkIfInlogged = localStorage.getItem("username");

login.appendChild(h1);
login.appendChild(paragrafAnvändarNamn);
login.appendChild(inputAnvändarNamn);
login.appendChild(paragrafLösenord);
login.appendChild(inputLösenord);
login.appendChild(button);

function inLoggade() {
    console.log("klick");
    localStorage.setItem("username", userName);
    h1.innerHTML = "Du är nu inloggad! Vällkommen!";
    login.removeChild(paragrafAnvändarNamn);
    login.removeChild(inputAnvändarNamn);
    login.removeChild(paragrafLösenord);
    login.removeChild(inputLösenord);
    omDuÄrInloggad = true;
    button.textContent = "Logga Ut!";
}

if (checkIfInlogged) {
    inLoggade();
}

button.addEventListener("click", () => {
    if (!omDuÄrInloggad) {
        let användarNamnResultat = inputAnvändarNamn.value;
        let användarLösenordResult = inputLösenord.value;

        if (användarNamnResultat == userName && användarLösenordResult == userPassword) {
            inLoggade();
        }
        else {
            h1.innerHTML = "Du skrev fel användar- namn eller lösenord!";
            inputAnvändarNamn.value = "";
            inputLösenord.value = "";
        }
    
    }else {
        localStorage.clear();
        h1.innerHTML = "Logga in!"; 

        login.appendChild(paragrafAnvändarNamn);
        login.appendChild(inputAnvändarNamn);
        login.appendChild(paragrafLösenord);
        login.appendChild(inputLösenord);
        login.appendChild(button);
        button.textContent = "logga in"; 
        omDuÄrInloggad = false; 
        inputAnvändarNamn.value = "";
        inputLösenord.value = "";
    }
});



