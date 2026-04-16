const DropDownMenu = document.getElementById("SideMenuId");
const FloatMenu    = document.getElementById("FloatMenuId");
const Body         = document.getElementById("CloseMenusDiv");


let OpenDrop = false;
let OpenFloat = false;


function OpenDropMenu ()
{
    if (OpenDrop == false)
    {
        DropDownMenu.classList.remove("up");
        DropDownMenu.classList.add("down")
        DropDownMenu.classList.remove("hidden");
        OpenDrop = true;

        /*Desativa o outro menu*/
        FloatMenu.classList.remove("visible");
        FloatMenu.classList.add("invisible");
        setTimeout(() => { FloatMenu.classList.add("hidden"); FloatMenu.classList.remove("invisible"); }, 500);
        OpenFloat = false;
    }
    else if (OpenDrop == true)
    {

        DropDownMenu.classList.remove("down")
        DropDownMenu.classList.add("up");
        setTimeout(() => { DropDownMenu.classList.add("hidden"); DropDownMenu.classList.remove("up"); }, 500);
        OpenDrop = false;
    }
}


function OpenFloatMenu ()
{
    if (OpenFloat == false)
    {
        FloatMenu.classList.remove("invisible");
        FloatMenu.classList.add("visible");
        FloatMenu.classList.remove("hidden");
        OpenFloat = true;

        /*Desativa o outro menu*/
        DropDownMenu.classList.remove("down")
        DropDownMenu.classList.add("up");
        setTimeout(() => { DropDownMenu.classList.add("hidden"); DropDownMenu.classList.remove("up"); }, 500);
        OpenDrop = false;
    }
    else if (OpenFloat == true)
    {
        FloatMenu.classList.remove("visible");
        FloatMenu.classList.add("invisible");
        setTimeout(() => { FloatMenu.classList.add("hidden"); FloatMenu.classList.remove("invisible"); }, 500);
        OpenFloat = false;
    }
}

function CloseAll ()
{
        FloatMenu.classList.remove("visible");
        FloatMenu.classList.add("invisible");
        setTimeout(() => { FloatMenu.classList.add("hidden"); FloatMenu.classList.remove("invisible"); }, 500);
        OpenFloat = false;

        DropDownMenu.classList.remove("down")
        DropDownMenu.classList.add("up");
        setTimeout(() => { DropDownMenu.classList.add("hidden"); DropDownMenu.classList.remove("up"); }, 500);
        OpenDrop = false;
}