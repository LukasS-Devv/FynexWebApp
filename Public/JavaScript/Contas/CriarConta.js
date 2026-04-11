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
        password.classList.add('input-erro');
        confirm.classList.add('input-erro');
        alert("As palavras-passe não coincidem!");
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
                alert("Este email já está em uso!");
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