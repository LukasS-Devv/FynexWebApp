import { auth } from "../Firebase.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-auth.js";

async function Login()
{
    const email    = document.getElementById("email");
    const password = document.getElementById("password");
    const campos   = [email, password];
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

    if (full === true)
    {
        try
        {
            await signInWithEmailAndPassword(auth, email.value, password.value);
            window.location.replace("../Html/BemVindo.html");
        }
        catch (erro)
        {
            if (erro.code === "auth/user-not-found" || erro.code === "auth/wrong-password")
                alert("Email ou palavra-passe incorretos!");
            else if (erro.code === "auth/invalid-email")
                alert("Email inválido!");
            else
                alert("Erro: " + erro.message);
        }
    }
}

window.Login = Login;