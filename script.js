/* OPEN INVITATION */

const openBtn=document.getElementById("openBtn")
const music=document.getElementById("bgMusic")

openBtn.onclick=function(){

document.getElementById("intro").style.display="none"
document.getElementById("website").style.display="block"

music.play()

}


/* MUSIC BUTTON */

const musicBtn=document.getElementById("musicToggle")

musicBtn.onclick=function(){

if(music.paused){

music.play()
musicBtn.innerText="🔊"

}else{

music.pause()
musicBtn.innerText="🔇"

}

}


/* COUNTDOWN */

var weddingDate=new Date("Dec 8, 2026 00:00:00").getTime()

setInterval(function(){

var now=new Date().getTime()
var distance=weddingDate-now

var days=Math.floor(distance/(1000*60*60*24))
var hours=Math.floor((distance%(1000*60*60*24))/(1000*60*60))
var minutes=Math.floor((distance%(1000*60*60))/(1000*60))
var seconds=Math.floor((distance%(1000*60))/1000)

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

document.querySelectorAll(".color").forEach(c=>{

c.onclick=function(){

const hex=this.getAttribute("data")

navigator.clipboard.writeText(hex)

document.getElementById("copyMsg").innerText=hex+" copied!"

}

})


/* PETAL SYSTEM */

const back=document.querySelector(".back")
const mid=document.querySelector(".mid")
const front=document.querySelector(".front")


function spawnPetal(layer,minSize,maxSize,minSpeed,maxSpeed){

const petal=document.createElement("img")

petal.src="petal.png"
petal.className="petal"

petal.style.left=Math.random()*100+"vw"

const size=Math.random()*(maxSize-minSize)+minSize
petal.style.width=size+"px"

const duration=Math.random()*(maxSpeed-minSpeed)+minSpeed
petal.style.animationDuration=duration+"s"

const rotate=Math.random()*360
petal.style.transform="rotate("+rotate+"deg)"

petal.style.animationDelay=Math.random()*2+"s"

layer.appendChild(petal)

setTimeout(()=>{
petal.remove()
},duration*1000)

}


/* INITIAL PETALS */

for(let i=0;i<4;i++){

spawnPetal(back,20,30,14,18)
spawnPetal(mid,30,40,12,16)
spawnPetal(front,40,55,10,14)

}


/* CONTINUOUS PETALS */

setInterval(()=>spawnPetal(back,20,30,14,18),2600)
setInterval(()=>spawnPetal(mid,30,40,12,16),2000)
setInterval(()=>spawnPetal(front,40,55,10,14),1600)
