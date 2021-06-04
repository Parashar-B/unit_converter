function convert(){
    input_value=document.getElementById("fi").value;
    if(input_value==0)
        {document.getElementById("notifier").style.visibility="visible";
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
    if(document.getElementById("fs").value == "Foot(ft)" && document.getElementById("ts").value == "Centimeter(cm)")
        document.getElementById("ti").value=input_value*30.48;
}