function convert(){
    input_value=document.getElementById("fi").value;
    if(input_value==0)
        {document.getElementById("ti").value=null;
        return;}
    else{
        switch(document.getElementById("sub").value){
            case "length" : length_convert();break;
            case "temperature" : temperature_convert();break;
            case "mass" : mass_convert();break;
            case "time" : time_convert();break;
            case "data" : data_convert();break;
            default : alert("ERROR");
        }
    }
}

function length_convert(){
    if(document.getElementById("fs").value == document.getElementById("ts").value)
        document.getElementById("ti").value=document.getElementById("fi").value;
    else if(document.getElementById("fs").value=="Centimeter(cm)")
        convert_cm();
    else if(document.getElementById("fs").value=="Foot(ft)")
        convert_ft();
    else if(document.getElementById("fs").value=="Meter(m)")
        convert_m();
    else
        convert_km();

}

function convert_cm(){
    var x=document.getElementById("ts").value;
    switch(x){
        case "Foot(ft)" : document.getElementById("ti").value=input_value*0.0328084;break;
        case "Meter(m)" : document.getElementById("ti").value=input_value*0.01;break;
        case "Kilometer(km)" : document.getElementById("ti").value=input_value*1e-5;break;
    }
}

function convert_ft(){
    var x=document.getElementById("ts").value;
    switch(x){
        case "Centimeter(cm)" : document.getElementById("ti").value=input_value*30.48;break;
        case "Meter(m)" : document.getElementById("ti").value=input_value*0.3048;break;
        case "Kilometer(km)" : document.getElementById("ti").value=input_value*0.0003048;break;
    }
}

function convert_m(){
    var x=document.getElementById("ts").value;
    switch(x){
        case "Centimeter(cm)" : document.getElementById("ti").value=input_value*100;break;
        case "Foot(ft)" : document.getElementById("ti").value=input_value*3.28084;break;
        case "Kilometer(km)" : document.getElementById("ti").value=input_value*0.001;break;
    }
}

function convert_km(){
    var x=document.getElementById("ts").value;
    switch(x){
        case "Centimeter(cm)" : document.getElementById("ti").value=input_value*100000;break;
        case "Foot(ft)" : document.getElementById("ti").value=input_value*3280.84;break;
        case "Meter(m)" : document.getElementById("ti").value=input_value*1000;break;
    }
}