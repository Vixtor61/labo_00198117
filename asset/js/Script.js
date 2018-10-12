var container = document.getElementById("c1");
console.log(container);
container.innerText = "Hola Mundo!";
container.style.backgroundColor = "#000000";
container.style.color= "#1cb723";
container.style.width = "200px";
container.style.height ="200px";
container.innerHTML = "<input type=”text” placeholder=’holi’>"

var containers = document.getElementsByClassName("c2");

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

for(let i = 0;i<containers.length;i++){
    containers[i].innerHTML = "<input type='text' placeholder='kljashg'>";
}


var boton = document.getElementById("btn-click");

boton.onclick = function(evt){
    alert("holamundo");
}

var btnCopy = document.getElementById("btnCopy");

btnCopy.onclick = function(evt){
    
    let msj = document.getElementById('textMsj').value;
    document.getElementById('showMsj').innerText = msj;
}