



//Configuração do DarkMode
function toggleDarkMode() {
    var body = document.body;
    body.classList.toggle("dark-mode");
}

const inputUser = document.querySelector("input[type='email']");

inputUser.addEventListener("focus", ()=>{
    inputUser.setAttribute("style","outline-color:#ff0000;");
});

inputUser.addEventListener("keyup", ()=>{
    const lblUser = document.querySelector("label[for='idEmail']");
    if(inputUser.value.length < 5){
        lblUser.innerHTML = "<span style='color:#ff0000;'>Email (Mínimo de 30 caractéres)</span>"
        inputUser.setAttribute("style","outline-color:#ff0000;");
    }else{
        lblUser.innerHTML = "<span style='color:#00ff00;'>Email</span>"
        inputUser.setAttribute("style","outline-color:#00ff00;");
    }
});
