const btn = document.getElementById("openBtn")

btn.onclick=function(){

document.getElementById("intro").style.display="none"
document.getElementById("website").style.display="block"

document.getElementById("music").play()

}



/* COUNTDOWN */

var weddingDate = new Date("Dec 8, 2026 00:00:00").getTime()

setInterval(function(){

var now = new Date().getTime()

var distance = weddingDate - now

var days = Math.floor(distance/(1000*60*60*24))
var hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60))
var minutes = Math.floor((distance%(1000*60*60))/(1000*60))
var seconds = Math.floor((distance%(1000*60))/1000)

updateFlip("days",days)
updateFlip("hours",hours)
updateFlip("minutes",minutes)
updateFlip("seconds",seconds)

},1000)



function updateFlip(id,value){

const el=document.getElementById(id)

if(el.innerText!=value){

el.classList.add("flip")

setTimeout(()=>{

el.innerText=value
el.classList.remove("flip")

},250)

}

}



/* COPY COLOR */

const colors=document.querySelectorAll(".color")

colors.forEach(c=>{

c.onclick=function(){

const hex=this.getAttribute("data")

navigator.clipboard.writeText(hex)

document.getElementById("copyMsg").innerText=hex+" copied!"

}

})

/* PETAL GENERATOR */

const container = document.querySelector(".petals")

for(let i=0;i<20;i++){

const petal=document.createElement("div")

petal.classList.add("petal")

/* random color */

if(Math.random()>0.5){

petal.classList.add("pink")

}else{

petal.classList.add("blue")

}

/* random size */

let size=20+Math.random()*25

petal.style.width=size+"px"
petal.style.height=size+"px"

/* random position */

petal.style.left=Math.random()*100+"%"

/* random speed */

petal.style.animationDuration=8+Math.random()*10+"s"

container.appendChild(petal)

}