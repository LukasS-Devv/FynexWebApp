import { auth, db } from "./Firebase.js";
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-firestore.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-auth.js";
import { doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-firestore.js";

// Proteção de página
onAuthStateChanged(auth, async (user) =>
{
    if (!user)
    {
        // Não está autenticado → volta ao Index
        window.location.replace("../Html/Index.html");
        return;
    }

    // Verifica se já tem dados no Firestore
    const docRef  = doc(db, "utilizadores", user.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists())
    {
        // Já tem cadastro → vai direto para o Dashboard
        window.location.replace("../Html/BemVindo.html");
    }
    // Se não tem dados → fica na página de Cadastro (normal)
}); 

async function Entrar()
{
    const nome      = document.getElementById("nome");
    const sobrenome = document.getElementById("sobrenome");
    const montante  = document.getElementById("montante");
    const moeda     = document.getElementById("moeda");
    const campos    = [nome, sobrenome, montante, moeda];
    var full        = true;

    campos.forEach(campo =>
    {
        if (campo.value.trim() === "" || campo.value === "N")
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
        onAuthStateChanged(auth, async (user) =>
        {
            if (user)
            {
                await setDoc(doc(db, "utilizadores", user.uid),
                {
                    nome:       nome.value.trim(),
                    sobrenome:  sobrenome.value.trim(),
                    saldo:      parseFloat(montante.value),
                    moeda:      moeda.value,
                    criadoEm:   new Date()
                });

                window.location.replace("../Html/BemVindo.html");
            }
            else
            {
                window.location.replace("../Html/Index.html");
            }
        });
    }
}

window.Entrar = Entrar;