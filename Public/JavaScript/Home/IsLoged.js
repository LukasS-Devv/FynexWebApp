import { auth, db }           from "../Firebase.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-auth.js";
import { doc, getDoc }        from "https://www.gstatic.com/firebasejs/12.12.0/firebase-firestore.js";


// Proteção de página 
onAuthStateChanged(auth, async (user) =>
{
    if (!user)
    {
        window.location.replace("../Html/Index.html");
        return;
    }

    // Busca dados do utilizador
    const docRef  = doc(db, "utilizadores", user.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists())
    {
        const dados = docSnap.data();
        document.getElementById("Greetings").textContent = "Olá, " + dados.nome + "!";
    }

    if(wrapper) wrapper.classList.add("visible");

});
