//Validação do primeiro nome no form
const inputNome = document.querySelector("input[id='idNome']");

inputNome.addEventListener("focus", ()=>{
    if(inputNome.value.length < 3){
        inputNome.setAttribute("style","outline-color:#ff0000;");
    } else {
        inputNome.setAttribute("style","outline-color:#00ff00;");
    }
});

inputNome.addEventListener("keyup", ()=>{
    const lblUser = document.querySelector("label[for='idNome']");
    if(inputNome.value.length < 3){
        lblUser.innerHTML = "<span style='color:#ff0000;'>Primeiro Nome (Mínimo de 3 caractéres): </span>";
        inputNome.setAttribute("style","outline-color:#ff0000;");
    }else {
        lblUser.innerHTML = "<span style='color:#00ff00;'>Primeiro Nome: </span>";
        inputNome.setAttribute("style","outline-color:#00ff00;");
    }
});

//Validação do sobrenome no form
const inputSobrenome = document.querySelector("input[id='idSobrenome']");

inputSobrenome.addEventListener("focus", ()=>{
    if(inputSobrenome.value.length < 3){
        inputSobrenome.setAttribute("style","outline-color:#ff0000;");
    } else {
        inputSobrenome.setAttribute("style","outline-color:#00ff00;");
    }
});

inputSobrenome.addEventListener("keyup", ()=>{
    const lblUser = document.querySelector("label[for='idSobrenome']");
    if(inputSobrenome.value.length < 3){
        lblUser.innerHTML = "<span style='color:#ff0000;'>Segundo Nome (Mínimo de 3 caractéres): </span>";
        inputSobrenome.setAttribute("style","outline-color:#ff0000;");
    }else {
        lblUser.innerHTML = "<span style='color:#00ff00;'>Segundo Nome: </span>";
        inputSobrenome.setAttribute("style","outline-color:#00ff00;");
    }
});

//Configuração do DarkMode
function toggleDarkMode() {
    var body = document.body;
    body.classList.toggle("dark-mode");    
}