var m="DARK";
function mode_change(){
    if(m=="DARK")
       { m="LIGHT";
         light_mode();}
    else
        {m="DARK";
         dark_mode();}
}

function light_mode()
{
    var x=document.getElementById("switch");
    x.style.backgroundColor="#E8BD0D";
    x.style.color="black";
    var y=document.getElementById("mode_indicator");
    y.innerHTML="LIGHT-MODE";
    y.style.left="34px";
    var z=document.getElementById("mode_dot");
    z.style.transition="left 0.2s";
    z.style.left="5px";    
    document.getElementsByTagName("body")[0].style.backgroundColor="#B4D9D4";
    document.getElementById("head").style.borderColor="black";
    document.getElementsByTagName("p")[0].style.color="black";
    document.getElementsByTagName("p")[1].style.color="black";
    document.getElementsByClassName("in")[0].style.backgroundColor="#B4D9D4";
    document.getElementsByClassName("in")[0].style.borderColor="black";
    document.getElementsByClassName("in")[0].style.color="black";
    document.getElementsByClassName("in")[1].style.backgroundColor="#B4D9D4";
    document.getElementsByClassName("in")[1].style.borderColor="black";
    document.getElementsByClassName("in")[1].style.color="black";
}

function dark_mode()
{
    var x=document.getElementById("switch");
    x.style.backgroundColor="#242B2E";
    x.style.color="white";
    var y=document.getElementById("mode_indicator");
    y.innerHTML="DARK-MODE";
    y.style.left="5px";
    var z=document.getElementById("mode_dot");
    z.style.transition="left 0.2s";
    z.style.left="69px";    
    document.getElementsByTagName("body")[0].style.backgroundColor="#242B2E";
    document.getElementById("head").style.borderColor="white";
    document.getElementsByTagName("p")[0].style.color="white";
    document.getElementsByTagName("p")[1].style.color="white";
    document.getElementsByClassName("in")[0].style.backgroundColor="#242B2E";
    document.getElementsByClassName("in")[0].style.borderColor="white";
    document.getElementsByClassName("in")[0].style.color="white";
    document.getElementsByClassName("in")[1].style.backgroundColor="#242B2E";
    document.getElementsByClassName("in")[1].style.borderColor="white";
    document.getElementsByClassName("in")[1].style.color="white";
}

