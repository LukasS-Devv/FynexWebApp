import { auth } from "../Firebase.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-auth.js";

async function CriarConta()
{
    const email    = document.getElementById("email");
    const password = document.getElementById("password");
    const confirm  = document.getElementById("confirm");
    const campos   = [email, password, confirm];
    var full       = true;

    // Validação campos vazios
    campos.forEach(campo =>
    {   
        if (campo.value.trim() === "")
        {
            campo.classList.add('input-erro');
            full = false;
        }
        else
        {
            campo.classList.remove('input-erro');
        }
    });

    // Validação passwords iguais
    if (password.value !== confirm.value)
    {
        alert("As palavras-passe não coincidem!");
        password.classList.add('input-erro');
        confirm.classList.add('input-erro');
        return;
    }

    if (full === true)
    {
        try
        {
            await createUserWithEmailAndPassword(auth, email.value, password.value);
            window.location.replace("../Html/Cadastro.html");
        }

        catch (erro)
        {
            if (erro.code === "auth/email-already-in-use")
            {
                alert("Uma conta com esta email já existe, redirecionando para a pagina de Login");
                window.location.replace("../Html/Login.html");
            }
            else if (erro.code === "auth/weak-password")
                alert("A palavra-passe deve ter pelo menos 6 caracteres!");

            else if (erro.code === "auth/invalid-email")
                alert("Email inválido!");
            
            else
                alert("Erro: " + erro.message);
        }
    }
}

window.CriarConta = CriarConta;