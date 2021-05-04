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
    var x=document.getElementById("mode_label");
    x.innerHTML="LIGHT-MODE";
    x.style.transform="paddingLeft 1s";
    x.style.paddingLeft="35px";
    x.style.backgroundColor="#E8BD0D";
    x.style.color="black";
    document.getElementsByTagName("body")[0].style.backgroundColor="#CAD5E2";
    document.getElementById("head").style.borderColor="black";
    document.getElementsByTagName("p")[0].style.color="black";
    document.getElementsByTagName("p")[1].style.color="black";
    document.getElementsByClassName("in")[0].style.backgroundColor="#CAD5E2";
    document.getElementsByClassName("in")[0].style.borderColor="black";
    document.getElementsByClassName("in")[0].style.color="black";
    document.getElementsByClassName("in")[1].style.backgroundColor="#CAD5E2";
    document.getElementsByClassName("in")[1].style.borderColor="black";
    document.getElementsByClassName("in")[1].style.color="black";
}

function dark_mode()
{
    var x=document.getElementById("mode_label");
    x.innerHTML="DARK-MODE";
    x.style.transform="paddingLeft 1s";
    x.style.paddingLeft="5px";
    x.style.transform="translateX 1s";
    x.style.translateX="-68px";
    x.style.backgroundColor="#242B2E";
    x.style.color="white";
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