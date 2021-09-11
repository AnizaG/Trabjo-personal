let nav = document.getElementById('menSoc');

window.alert("Bienvenid@ ¿Quieres un integrante nuevo en tu familia? Esta es tu oportunidad");

function menus(){
    let Desplazamiento_actual = window.pageYOffset;
    if(Desplazamiento_actual >= 40){
    nav.classList.remove('bg-dark');
    nav.className = ('bg-dark1');
    nav.style.transition = '1s';
    }else{
    nav.classList.remove('bg-dark1');
    nav.className = ('bg-dark'); 
    nav.style.transition = '1s';
    }
}

window.addEventListener('load', function(){
    menus();    
});


window.addEventListener('scroll', function(){
    console.log(window.pageYOffset);
    menus();
});

function startfecha() {
    var d = new Date(),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();
    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;
    fechap = [day, month, year].join('-')
    document.getElementById("fecha").innerHTML = fechap;
};

    function startTime() {
        today = new Date();
        h = today.getHours();
        m = today.getMinutes();
        s = today.getSeconds();
        m = checkTime(m);
        s = checkTime(s);
        document.getElementById('reloj').innerHTML = h + ":" + m + ":" + s;
        t = setTimeout('startTime()', 500);
    }

    function checkTime(i) { if (i < 10) { i = "0" + i; } return i; }
    window.onload = function () { 
        startTime(); 
        startfecha(); 
    }


function ejecutaAlerta() {   
var w = window.open('','','width=100,height=100')
w.document.write('Hola StackOverflow!')
w.focus()
setTimeout(function() {w.close();}, 2000)
}

//Inicio cambio de color//
function generarNuevoColor(){
	var simbolos, color;
	simbolos = "0123456789ABCDEF";
	color = "#";

	for(var i = 0; i < 6; i++){
		color = color + simbolos[Math.floor(Math.random() * 16)];
	}

	document.body.style.background = color;
	document.getElementById("hexadecimal").innerHTML = color;
	document.getElementById("text").innerHTML = "Copiar Color";
}

function copiarAlPortapapeles(hexadecimal) {
	var aux = document.createElement("input");
	aux.setAttribute("value", document.getElementById(hexadecimal).innerHTML);
	document.body.appendChild(aux);
	aux.select();
	document.execCommand("copy");
	document.body.removeChild(aux);
	document.getElementById("text").innerHTML = "Copiado!";
}

