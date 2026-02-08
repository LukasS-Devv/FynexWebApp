function Entrar ()
{
    const nome = document.getElementById("nome");
    const sobrenome = document.getElementById("sobrenome");
    const montante = document.getElementById("montante");
    const moeda = document.getElementById("moeda");

    if (nome.value.trim() === "" || sobrenome.value.trim() === "" || montante.value.trim() === "" || moeda.value === "N")
    {
        alert("Preencha todos os campos");
        return;
    }
    
    window.open("../Html/BemVindo.html","_self");
};


