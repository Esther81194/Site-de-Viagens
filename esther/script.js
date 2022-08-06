function logar()

    var login = document.getElementById("login").value;
    var senha = document.getElementById("senha").value;
    

    if(login == "Donovan" && senha == "admin"){
        alert("Login realizado com sucesso!");
        location.href="home.html";
    }else{
        alert("Usuário ou senha incorretos!");
    }

