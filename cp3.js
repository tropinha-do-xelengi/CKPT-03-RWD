//Validação do primeiro nome no form
const inputNome = document.querySelector("input[id='idNome']");

inputNome.addEventListener("focus", ()=>{
    if(inputNome.value.length < 5){
        inputNome.setAttribute("style","outline-color:#ff0000;");
    } else {
        inputNome.setAttribute("style","outline-color:#00ff00;");
    }
});

inputNome.addEventListener("keyup", ()=>{
    const lblUser = document.querySelector("label[for='idNome']");
    if(inputNome.value.length < 5){
        lblUser.innerHTML = "<span style='color:#ff0000;'>Primeiro Nome: </span>";
        inputNome.setAttribute("style","outline-color:#ff0000;");
    }else {
        lblUser.innerHTML = "<span style='color:#00ff00;'>Primeiro Nome: </span>";
        inputNome.setAttribute("style","outline-color:#00ff00;");
    }
});

inputNome.addEventListener("blur", ()=>{
    const lblUser = document.querySelector("label[for='idNome']");
    if (inputNome.value.length <= 5){
        lblUser.innerHTML = "<span style='color:#000000;'>Primeiro Nome: </span>";
    }
});

//Validação do sobrenome no form
const inputSobrenome = document.querySelector("input[id='idSobrenome']");

inputSobrenome.addEventListener("focus", ()=>{
    if(inputSobrenome.value.length < 5){
        inputSobrenome.setAttribute("style","outline-color:#ff0000;");
    } else {
        inputSobrenome.setAttribute("style","outline-color:#00ff00;");
    }
});

inputSobrenome.addEventListener("keyup", ()=>{
    const lblUser = document.querySelector("label[for='idSobrenome']");
    if(inputSobrenome.value.length < 5){
        lblUser.innerHTML = "<span style='color:#ff0000;'>Segundo Nome: </span>";
        inputSobrenome.setAttribute("style","outline-color:#ff0000;");
    }else {
        lblUser.innerHTML = "<span style='color:#00ff00;'>Segundo Nome: </span>";
        inputSobrenome.setAttribute("style","outline-color:#00ff00;");
    }
});

inputSobrenome.addEventListener("blur", ()=>{
    const lblUser = document.querySelector("label[for='idSobrenome']");
    if (inputSobrenome.value.length <= 5){
        lblUser.innerHTML = "<span style='color:#000000;'>Segundo Nome: </span>";
    }
});

//Validação do e-mail no form
const inputEmail = document.querySelector("input[id='idEmail']");

inputEmail.addEventListener("focus", ()=>{
    if(inputEmail.value.length < 5){
        inputEmail.setAttribute("style","outline-color:#ff0000;");
    } else {
        inputEmail.setAttribute("style","outline-color:#00ff00;");
    }
});

inputEmail.addEventListener("keyup", ()=>{
    const lblUser = document.querySelector("label[for='idEmail']");
    if(inputEmail.value.length < 5){
        lblUser.innerHTML = "<span style='color:#ff0000;'>Segundo Nome: </span>";
        inputEmail.setAttribute("style","outline-color:#ff0000;");
    }else {
        lblUser.innerHTML = "<span style='color:#00ff00;'>Segundo Nome: </span>";
        inputEmail.setAttribute("style","outline-color:#00ff00;");
    }
});

inputEmail.addEventListener("blur", ()=>{
    const lblUser = document.querySelector("label[for='idEmail']");
    if (inputEmail.value.length <= 5){
        lblUser.innerHTML = "<span style='color:#000000;'>Segundo Nome: </span>";
    }
});

//Configuração do DarkMode
function toggleDarkMode() {
    var body = document.body;
    body.classList.toggle("dark-mode");    
}