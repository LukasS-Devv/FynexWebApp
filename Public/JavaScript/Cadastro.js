/*window.onload = function ()
{
    if (localStorage.getItem('loged') === 'true')
    {
        window.location.replace("../Html/BemVindo.html");
    }
} */

function Entrar ()
{
    const nome = document.getElementById("nome");
    const sobrenome = document.getElementById("sobrenome");
    const montante = document.getElementById("montante");
    const moeda = document.getElementById("moeda");
    const campos = [nome,sobrenome,montante,moeda];
    var full = true;

    campos.forEach(campo =>
    {
        if(campo.value.trim() === "" || campo.value === "N")
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
        /*localStorage.setItem('loged', 'true'); */
        window.location.replace("../Html/BemVindo.html");
    }
};

// lembrar de remover dps
function skip ()
{
    window.location.replace("../Html/BemVindo.html");
}
