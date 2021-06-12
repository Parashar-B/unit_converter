function swap_value(){
    document.getElementById("fi").value=document.getElementById("ti").value;
    convert();
}

function convert(){
    input_value=document.getElementById("fi").value;
    if(document.getElementById("fi").value==null || input_value==""){
        document.getElementById("ti").value=null;
        return;
    }
    else if(document.getElementById("fs").value == document.getElementById("ts").value){
        document.getElementById("ti").value=document.getElementById("fi").value;
    }
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

// functions for handling LENGTH convert task
function length_convert(){
    if(document.getElementById("fs").value=="Centimeter(cm)")
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
        case "Foot(ft)" : document.getElementById("ti").value=input_value/30.48;break;
        case "Meter(m)" : document.getElementById("ti").value=input_value/100;break;
        case "Kilometer(km)" : document.getElementById("ti").value=input_value/100000;break;
    }
}

function convert_ft(){
    var x=document.getElementById("ts").value;
    switch(x){
        case "Centimeter(cm)" : document.getElementById("ti").value=input_value*30.48;break;
        case "Meter(m)" : document.getElementById("ti").value=input_value/3.281;break;
        case "Kilometer(km)" : document.getElementById("ti").value=input_value/3281;break;
    }
}

function convert_m(){
    var x=document.getElementById("ts").value;
    switch(x){
        case "Centimeter(cm)" : document.getElementById("ti").value=input_value*100;break;
        case "Foot(ft)" : document.getElementById("ti").value=input_value*3.281;break;
        case "Kilometer(km)" : document.getElementById("ti").value=input_value/1000;break;
    }
}

function convert_km(){
    var x=document.getElementById("ts").value;
    switch(x){
        case "Centimeter(cm)" : document.getElementById("ti").value=input_value*100000;break;
        case "Foot(ft)" : document.getElementById("ti").value=input_value*3281;break;
        case "Meter(m)" : document.getElementById("ti").value=input_value*1000;break;
    }
}

//functions for handling TEMPERATURE convert task
function temperature_convert(){
    if(document.getElementById("fs").value=="Celsius(°C)")
        convert_celsi();
    else if(document.getElementById("fs").value=="Fahrenheit(°F)")
        convert_fahren();
    else
        convert_kelvin();
}

function convert_celsi(){
    var x=document.getElementById("ts").value;
    switch(x){
        case "Fahrenheit(°F)" : document.getElementById("ti").value=(input_value*9/5)+32;break;
        case "Kelvin(°K)" : document.getElementById("ti").value=parseInt(input_value)+273.15;break;
    }
}

function convert_fahren(){
    var x=document.getElementById("ts").value;
    switch(x){
        case "Celsius(°C)" : document.getElementById("ti").value=(input_value-32)*5/9;break;
        case "Kelvin(°K)" : document.getElementById("ti").value=(input_value-32)*5/9+273.15;break;
    }
}

function convert_kelvin(){
    var x=document.getElementById("ts").value;
    switch(x){
        case "Celsius(°C)" : document.getElementById("ti").value=input_value-273.15;break;
        case "Fahrenheit(°F)" : document.getElementById("ti").value=(input_value-273.15)*9/5+32;break;
    }
}

//functions for handling MASS convert task
function mass_convert(){
    if(document.getElementById("fs").value=="Kilogram(kg)")
        convert_kg();
    else if(document.getElementById("fs").value=="Gram(gm)")
        convert_gm();
    else if(document.getElementById("fs").value=="Milligram(mg)")
        convert_mg();
    else if(document.getElementById("fs").value=="Pound(lb)")
        convert_lb();
    else
        convert_t();
}

function convert_kg(){
    var x=document.getElementById("ts").value;
    switch(x){
        case "Gram(gm)" : document.getElementById("ti").value=input_value*1000;break;
        case "Milligram(mg)" : document.getElementById("ti").value=input_value*1e+6;break;
        case "Pound(lb)" : document.getElementById("ti").value=input_value*2.205;break;
        case "Tonne(t)" : document.getElementById("ti").value=input_value/1000;break;
    }
}

function convert_gm(){
    var x=document.getElementById("ts").value;
    switch(x){
        case "Kilogram(kg)" : document.getElementById("ti").value=input_value/1000;break;
        case "Milligram(mg)" : document.getElementById("ti").value=input_value*1000;break;
        case "Pound(lb)" : document.getElementById("ti").value=input_value/454;break;
        case "Tonne(t)" : document.getElementById("ti").value=input_value/1e+6;break;
    }
}

function convert_mg(){
    var x=document.getElementById("ts").value;
    switch(x){
        case "Kilogram(kg)" : document.getElementById("ti").value=input_value/1e+6;break;
        case "Gram(gm)" : document.getElementById("ti").value=input_value/1000;break;
        case "Pound(lb)" : document.getElementById("ti").value=input_value/453592;break;
        case "Tonne(t)" : document.getElementById("ti").value=input_value/1e+9;break;
    }
}

function convert_lb(){
    var x=document.getElementById("ts").value;
    switch(x){
        case "Kilogram(kg)" : document.getElementById("ti").value=input_value/2.205;break;
        case "Gram(gm)" : document.getElementById("ti").value=input_value*454;break;
        case "Milligram(mg)" : document.getElementById("ti").value=input_value*1000;break;
        case "Tonne(t)" : document.getElementById("ti").value=input_value/1e+6;break;
    }
}

function convert_t(){
    var x=document.getElementById("ts").value;
    switch(x){
        case "Kilogram(kg)" : document.getElementById("ti").value=input_value*1000;break;
        case "Gram(gm)" : document.getElementById("ti").value=input_value*1e+6;break;
        case "Milligram(mg)" : document.getElementById("ti").value=input_value*1e+9;break;
        case "Pound(lb)" : document.getElementById("ti").value=input_value*2205;break;
    }
}

//functions for handling TIME convert task
function time_convert(){
    if(document.getElementById("fs").value=="Second(s)")
        convert_s();
    else if(document.getElementById("fs").value=="Minute(min)")
        convert_min();
    else
        convert_hr();
}

function convert_s(){
    var x=document.getElementById("ts").value;
    switch(x){
        case "Minute(min)" : document.getElementById("ti").value=input_value/60;break;
        case "Hour(hr)" : document.getElementById("ti").value=input_value/3600;break;
    }
}

function convert_min(){
    var x=document.getElementById("ts").value;
    switch(x){
        case "Second(s)" : document.getElementById("ti").value=input_value*60;break;
        case "Hour(hr)" : document.getElementById("ti").value=input_value/60;break;
    }
}

function convert_hr(){
    var x=document.getElementById("ts").value;
    switch(x){
        case "Second(s)" : document.getElementById("ti").value=input_value*3600;break;
        case "Minute(min)" : document.getElementById("ti").value=input_value*60;break;
    }
}

//functions for handling DATA convert task
function data_convert(){
    if(document.getElementById("fs").value=="Byte(B)")
        convert_B();
    else if(document.getElementById("fs").value=="Kilobyte(KB)")
        convert_KB();
    else if(document.getElementById("fs").value=="Megabyte(MB)")
        convert_MB();
    else if(document.getElementById("fs").value=="Gigabyte(GB)")
        convert_GB();
    else
        convert_TB();
}

function convert_B(){
    var x=document.getElementById("ts").value;
    switch(x){
        case "Kilobyte(KB)" : document.getElementById("ti").value=input_value/1000;break;
        case "Megabyte(MB)" : document.getElementById("ti").value=input_value/1e+6;break;
        case "Gigabyte(GB)" : document.getElementById("ti").value=input_value/1e+9;break;
        case "Terabyte(TB)" : document.getElementById("ti").value=input_value/1e+12;break;
    }
}

function convert_KB(){
    var x=document.getElementById("ts").value;
    switch(x){
        case "Byte(B)" : document.getElementById("ti").value=input_value*1000;break;
        case "Megabyte(MB)" : document.getElementById("ti").value=input_value/1000;break;
        case "Gigabyte(GB)" : document.getElementById("ti").value=input_value/1e+6;break;
        case "Terabyte(TB)" : document.getElementById("ti").value=input_value/1e+9;break;
    }
}

function convert_MB(){
    var x=document.getElementById("ts").value;
    switch(x){
        case "Byte(B)" : document.getElementById("ti").value=input_value*1e+6;break;
        case "Kilobyte(KB)" : document.getElementById("ti").value=input_value*1000;break;
        case "Gigabyte(GB)" : document.getElementById("ti").value=input_value/1000;break;
        case "Terabyte(TB)" : document.getElementById("ti").value=input_value/1e+6;break;
    }
}

function convert_GB(){
    var x=document.getElementById("ts").value;
    switch(x){
        case "Byte(B)" : document.getElementById("ti").value=input_value*1e+9;break;
        case "Kilobyte(KB)" : document.getElementById("ti").value=input_value*1e+6;break;
        case "Megabyte(MB)" : document.getElementById("ti").value=input_value*1000;break;
        case "Terabyte(TB)" : document.getElementById("ti").value=input_value/1000;break;
    }
}

function convert_TB(){
    var x=document.getElementById("ts").value;
    switch(x){
        case "Byte(B)" : document.getElementById("ti").value=input_value*1e+12;break;
        case "Kilobyte(KB)" : document.getElementById("ti").value=input_value*1e+9;break;
        case "Megabyte(MB)" : document.getElementById("ti").value=input_value*1e+6;break;
        case "Gigabyte(GB)" : document.getElementById("ti").value=input_value*1000;break;
    }
}