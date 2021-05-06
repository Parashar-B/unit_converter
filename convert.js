var m="DARK";
var f="l"; // to know which domain(length/mass/...) is selected
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

function unit_changer() // first function to handle the unit change as per Domain change
{
    var x=document.getElementById("sub").value;
    switch(x)
    {
        case "length" : remove_unit();unit_l();break;

        case "temperature" :remove_unit(); unit_t();break;

        case "mass" : alert("M");break;

        case "time" : alert("T");break;

        case "data" :alert("D");break;
        default : alert("NO");
    }
}

function remove_unit() // to remove option from drop-down UNIT and empty the list for new UNIT
{
    var z;
    switch(f)
    {
        case "l": z=4;
        case "t": z=3;
    }
    var s=document.getElementById("fs");
    var t=document.getElementById("ts");
    while(z>=0)
    {
        s.remove(z);
        t.remove(z);
        z--;
    }
}

function unit_l()   //it handles the unit of "LENGTH"
{
    var a=["Kilometer(km)","Meter(m)","Centimeter(cm)","Foot(ft)"];
    var i;
    var x=document.getElementById("fs");
    var w=document.getElementById("ts");
    for(i=0;i<4;i++)
    {
        for(var j=2;j>0;j--) //2nd loop is for adding unit in both "FROM" and "TO"
        {
            var y=document.createElement("option");
            y.text=a[i];
            if(j==2)
            x.add(y);
            else
            w.add(y);
        }
    }
    f="l";
}

function unit_t() //it handles the unit of "TEMPERATURE"
{
    var a=["Celsius(°C)","Fahrenheit(°F)","Kelvin(°K)"];
    var i;
    var x=document.getElementById("fs");
    var w=document.getElementById("ts");
    for(i=0;i<3;i++)
    {
        for(var j=2;j>0;j--) //2nd loop is for adding unit in both "FROM" and "TO"
        {
            var y=document.createElement("option");
            y.text=a[i];
            if(j==2)
            x.add(y);
            else
            w.add(y);
        }
    }
    f="t";
}