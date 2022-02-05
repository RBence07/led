var size=300;
var radius=8;
if(window.innerWidth < 1000) {
        size=690;
        radius=18.4;
        const collection = document.getElementsByClassName("desktop");
        collection[0].innerHTML= "";
    }
else{
        size=300;
        radius=8;
        const collection = document.getElementsByClassName("mobile");
        collection[0].innerHTML= "";
        collection[1].innerHTML= "";
        collection[2].innerHTML= "";
    }

var data = (window.location.href.toString()).split(',');
console.log(data);
if(data.length == 22){
    console.log("alma")
    document.getElementById("brightness_1").value=parseInt(data[4]);
    document.getElementById("kelvin_1").value=parseInt(data[5]);

    document.getElementById("brightness_2").value=parseInt(data[9]);
    document.getElementById("kelvin_2").value=parseInt(data[10]);

    document.getElementById("brightness_3").value=parseInt(data[14]);
    document.getElementById("kelvin_3").value=parseInt(data[15]);

    document.getElementById("curtain_1").value=parseInt(data[16]);
    document.getElementById("brightness_4").value=parseInt(data[17]);
    document.getElementById("brightness_5").value=parseInt(data[18]);
    var colors = [data[19],data[20],data[21]]
}
else {
    data = ["A","255B","255C","255D","0E","0F","255G","255H","255I","0J","0K","255L","255M","255N","0O","0P","0Q","0R","0S"];
}

document.getElementById("change_color").href=data;
var colorPicker = new iro.ColorPicker('#picker1', {
    width: size,
    handleRadius: radius,
    borderWidth: 1,
    borderColor: "#fff",
    layout: [
    { 
        component: iro.ui.Wheel,
        options: {}
    },
    ]
});

if(data.length == 22){
    colorPicker.color.set(colors[0]);
    };

colorPicker.on(['color:init', 'input:end'], function(color) {
    data[1] = color.red+"B"
    data[2] = color.green+"C"
    data[3] = color.blue+"D"
    data[19] = color.hexString;
    document.getElementById("change_color").href=data;
});



function brightness_1(){
    var value = document.getElementById("brightness_1").value;
    data[4] = value+"=E";
    document.getElementById("change_color").href=data;
}

function kelvin_1(){
    var value = document.getElementById("kelvin_1").value;
    data[5] = value+"=F";
    document.getElementById("change_color").href=data;
}

var colorPicker = new iro.ColorPicker('#picker2', {
    width: size,
    handleRadius: radius,
    borderWidth: 1,
    borderColor: "#fff",
    layout: [
    { 
        component: iro.ui.Wheel,
        options: {}
    },
    ]
});

if(data.length == 22){
    colorPicker.color.set(colors[1]);
    };

colorPicker.on(['color:init', 'input:end'], function(color) {
    data[6] = color.red+"G"
    data[7] = color.green+"H"
    data[8] = color.blue+"I"
    data[20] = color.hexString;
    document.getElementById("change_color").href=data;
    });

function brightness_2(){
    var value = document.getElementById("brightness_2").value;
    data[9] = value+"J";
    document.getElementById("change_color").href=data;
}
    
function kelvin_2(){
    var value = document.getElementById("kelvin_2").value;
    data[10] = value+"K";
    document.getElementById("change_color").href=data;
}

var colorPicker = new iro.ColorPicker('#picker3', {
    width: size,
    handleRadius: radius,
    borderWidth: 1,
    borderColor: "#fff",
    layout: [
    { 
        component: iro.ui.Wheel,
        options: {}
    },
    ]
});

if(data.length == 22){
    colorPicker.color.set(colors[2]);
    };

colorPicker.on(['color:init', 'input:end'], function(color) {
    data[11] = color.red+"L"
    data[12] = color.green+"M"
    data[13] = color.blue+"N"
    data[21] = color.hexString;
    document.getElementById("change_color").href=data;
    });

function brightness_3(){
    var value = document.getElementById("brightness_3").value;
    data[14] = value+"O";
    document.getElementById("change_color").href=data;
}

function kelvin_3(){
    var value = document.getElementById("kelvin_3").value;
    data[15] = value+"P";
    document.getElementById("change_color").href=data;
}

function curtain_1(){
    var value = document.getElementById("curtain_1").value;
    data[16] = value+"Q";
    document.getElementById("change_color").href=data;
}

function brightness_4(){
    var value = document.getElementById("brightness_4").value;
    data[17] = value+"R";
    document.getElementById("change_color").href=data;
}

function brightness_5(){
    var value = document.getElementById("brightness_5").value;
    data[18] = value+"S";
    document.getElementById("change_color").href=data;
}

document.getElementById("loading").innerHTML= "";
