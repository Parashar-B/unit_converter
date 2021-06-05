
var f="l"; // to know which domain(length/mass/...) is selected
var input_value; //to store the value which need to convert 


function light_mode(){
    document.getElementsByTagName("body")[0].style.transition="background-color 0.3s";
    document.getElementsByTagName("body")[0].style.backgroundColor="white";
    document.getElementById("head").style.borderColor="black";
    document.getElementsByTagName("p")[0].style.color="black";
    document.getElementsByTagName("p")[1].style.color="black";
    document.getElementsByClassName("in")[0].style.borderColor="black";
    document.getElementsByClassName("in")[0].style.color="black";
    document.getElementsByClassName("in")[1].style.borderColor="black";
    document.getElementsByClassName("in")[1].style.color="black";
    document.getElementById("background_2").style.backgroundColor="lightgray";
    document.getElementById("background_1").style.backgroundColor="gray";
    document.getElementsByClassName("unit")[0].style.backgroundColor="gray";
    document.getElementsByClassName("unit")[1].style.backgroundColor="gray";
    document.getElementsByClassName("unit")[0].style.color="black";
    document.getElementsByClassName("unit")[1].style.color="black";

    document.getElementById("light").style.visibility="visible";
    document.getElementById("dark").style.visibility="hidden";
}

function dark_mode(){
    document.getElementsByTagName("body")[0].style.transition="background-color 0.3s";
    document.getElementsByTagName("body")[0].style.backgroundColor="#242B2E";
    document.getElementById("head").style.borderColor="white";
    document.getElementsByTagName("p")[0].style.color="white";
    document.getElementsByTagName("p")[1].style.color="white";
    document.getElementsByClassName("in")[0].style.borderColor="white";
    document.getElementsByClassName("in")[0].style.color="white";
    document.getElementsByClassName("in")[1].style.borderColor="white";
    document.getElementsByClassName("in")[1].style.color="white";
    document.getElementById("background_2").style.backgroundColor="black";
    document.getElementById("background_1").style.backgroundColor="darkslategray";
    document.getElementsByClassName("unit")[0].style.backgroundColor="darkslategray";
    document.getElementsByClassName("unit")[1].style.backgroundColor="darkslategray";
    document.getElementsByClassName("unit")[0].style.color="white";
    document.getElementsByClassName("unit")[1].style.color="white";

    document.getElementById("light").style.visibility="hidden";
    document.getElementById("dark").style.visibility="visible";
}


function unit_changer() // first function to handle the unit change as per Domain change
{
    var x=document.getElementById("sub").value;
    switch(x)
    {
        case "length" : remove_unit();unit_l();break;

        case "temperature" :remove_unit(); unit_tem();break;

        case "mass" : remove_unit(); unit_m();break;

        case "time" : remove_unit();unit_ti();break;

        case "data" :remove_unit();unit_d();break;
        default : alert("NO");
    }
}

function remove_unit() // to remove option from drop-down UNIT and empty the list for new UNIT
{
    var z;
    switch(f)
    {
        case "l": z=4;
        case "tem": z=3;
        case "m": z=5;
        case "ti": z=3;
        case "d":z=5;
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
    var a=["Centimeter(cm)","Foot(ft)","Meter(m)","Kilometer(km)"];
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

function unit_tem() //it handles the unit of "TEMPERATURE"
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
    f="tem";
}

function unit_m() //it handles the unit of "MASS"
{
    var a=["Kilogram(kg)","Gram(gm)","Milligram(mg)","Pound(lb)","Tonne(t)"];
    var i;
    var x=document.getElementById("fs");
    var w=document.getElementById("ts");
    for(i=0;i<5;i++)
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
    f="m";
}

function unit_ti() //it handles the unit of "TIME"
{
    var a=["Second(s)","Minute(min)","Hour(hr)"];
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
    f="ti";
}

function unit_d() //it handles the unit of "DATA"
{
    var a=["Byte(B)","Kilobyte(KB)","Megabyte(MB)","Gigabyte(GB)","Terabyte(TB)"];
    var i;
    var x=document.getElementById("fs");
    var w=document.getElementById("ts");
    for(i=0;i<5;i++)
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
    f="d";
}

function clear_input_box(){
    document.getElementsByClassName("in")[0].value=null;
    document.getElementsByClassName("in")[1].value=null;
}
