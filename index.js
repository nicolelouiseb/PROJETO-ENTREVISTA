const btnMobile = document.getElementById('btn-mobile');

btnMobile.addEventListener('click', cliqueMenu);

function cliqueMenu(){
    const nav  = document.getElementById('nav');
    nav.classList.toggle('active');
}

const inputArray = document.querySelectorAll("input");
const button = document.getElementById("submit");
let linha = 0;

button.addEventListener("click", (event)=>{
    event.preventDefault();
    const names = document.getElementsByClassName("name");
    const emails = document.getElementsByClassName("email");
    const borns = document.getElementsByClassName("born");
    const phones = document.getElementsByClassName("phone");

    const name = inputArray[0].value;
    names[linha].innerHTML = name;
    inputArray[0].value = "";

    const email = inputArray[1].value;
    emails[linha].innerHTML = email;
    inputArray[1].value = "";

    const born = inputArray[2].value;
    borns[linha].innerHTML = born;
    inputArray[2].value = "";

    const phone = inputArray[3].value;
    phones[linha].innerHTML = phone;
    inputArray[3].value = "";

    

    linha+=1;
})