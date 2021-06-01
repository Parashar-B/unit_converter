function convert(){
    input_value=document.getElementById("fi").value;
    switch(document.getElementById("sub").value){
        case "length" : length_convert();break;
    }
}

function length_convert(){
    if(document.getElementById("fs").value == "Foot(ft)" && document.getElementById("ts").value == "Centimeter(cm)")
        alert("NEW");
}