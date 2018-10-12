
/*

Ejercicio 1
*/
//1.1 - 1.2
var container = document.getElementById("c1");
console.log(container);
//1.3
container.innerText = "Hola Mundo!";
//1.4
container.style.backgroundColor = "#000000";
//1.5
container.style.color= "#1cb723";
//1.6
container.style.width = "200px";

container.style.height ="200px";
//1.7
container.innerHTML = "<input type=”text” placeholder=’holi’>"
/*
Ejercicio 2
*/
//2.1
var containers = document.getElementsByClassName("c2");
//2.2
for(let i = 0;i<containers.length;i++){
    containers[i].style.backgroundColor= "#009999";
}


 let box = document.querySelectorAll(".c2");
 box.forEach(element => {
     console.log(element);
 })

for(let i = 0;i<containers.length;i++){
    containers[i].style.backgroundColor= "#009999";
}
//2.3
for(let i = 0;i<containers.length;i++){
    containers[i].innerHTML = "<input type='text' placeholder='kljashg'>";
}

/*
Ejercicio 3
*/
//3.1
var boton = document.getElementById("btn-click");
//3.2
boton.onclick = function(evt){
    alert("Hola Mundo");
}
//3.3
var btnCopy = document.getElementById("btnCopy");
//3.4
btnCopy.onclick = function(evt){
    
    let msj = document.getElementById('textMsj').value;
    document.getElementById('showMsj').innerText = msj;
}