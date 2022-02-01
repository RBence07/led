var data = ["R1=255G1=255B1=255","L1=255","K1=255","R2=255G2=255B2=255","L2=255","K2=255","R3=255G3=255B3=255","L3=255","K3=255","C1=4","L4=255","L5=255"];
var size=300;
var radius=8;
if(window.innerWidth < 1000) {
        size=690;
        radius=18.4;
    }
else{
        size=300;
        radius=8;
    }
    
/*var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
var element = document.getElementById('text');
if (isMobile) {
    element.innerHTML = "You are using Mobile";
} else {
    element.innerHTML = "You are using Desktop";
*/
    
document.getElementById("change_color").href="?r"+data;
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
colorPicker.on(['color:init', 'input:end'], function(color) {
    data[0] ="R1="+color.red+"G1="+color.green+"B1="+color.blue;
    document.getElementById("change_color").href="?r"+data;
});


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

colorPicker.on(['color:init', 'input:end'], function(color) {
    data[3] = "R2="+color.red+"G2="+color.green+"B2="+color.blue;
    document.getElementById("change_color").href="?r"+data;
    });

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

colorPicker.on(['color:init', 'input:end'], function(color) {
    data[6] = "R3="+color.red+"G3="+color.green+"B3="+color.blue;
    document.getElementById("change_color").href="?r"+data;
    });

function brightness_1(){
    var value = document.getElementById("brightness_1").value;
    data[1] = "L1="+value;
    document.getElementById("change_color").href="?r"+data;
}

function kelvin_1(){
    var value = document.getElementById("kelvin_1").value;
    data[2] = "K1="+value;
    document.getElementById("change_color").href="?r"+data;
}

function brightness_2(){
    var value = document.getElementById("brightness_2").value;
    data[4] = "L2="+value;;
    document.getElementById("change_color").href="?r"+data;
}

function kelvin_2(){
    var value = document.getElementById("kelvin_2").value;
    data[5] = "K2="+value;
    document.getElementById("change_color").href="?r"+data;
}

function brightness_3(){
    var value = document.getElementById("brightness_3").value;
    data[7] = "L3="+value;
    document.getElementById("change_color").href="?r"+data;
}

function kelvin_3(){
    var value = document.getElementById("kelvin_3").value;
    data[8] = "K3="+value;
    document.getElementById("change_color").href="?r"+data;
}

function curtain_1(){
    var value = document.getElementById("curtain_1").value;
    data[9] = "C1="+value;
    document.getElementById("change_color").href="?r"+data;
}

function brightness_4(){
    var value = document.getElementById("brightness_4").value;
    data[10] = "L4="+value;
    document.getElementById("change_color").href="?r"+data;
}

function brightness_5(){
    var value = document.getElementById("brightness_5").value;
    data[11] = "L5="+value;
    document.getElementById("change_color").href="?r"+data;
}
