/* OPEN */

const openBtn=document.getElementById("openBtn")
const music=document.getElementById("bgMusic")
const intro=document.getElementById("intro")
const website=document.getElementById("website")

openBtn.onclick=function(){
intro.style.display="none"
website.style.display="block"
music.play()
}

/* MUSIC */

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

/* COPY */

document.querySelectorAll(".color").forEach(c=>{
c.onclick=function(){
const hex=this.getAttribute("data")
navigator.clipboard.writeText(hex)
document.getElementById("copyMsg").innerText=hex+" copied!"
}
})

/* PETALS (สมจริง) */

const back=document.querySelector(".back")
const mid=document.querySelector(".mid")
const front=document.querySelector(".front")

function spawnPetal(layer,minSize,maxSize,minSpeed,maxSpeed){

const petal=document.createElement("img")
petal.src="petal.png"
petal.className="petal"

petal.style.left = Math.random()*100 + "vw"
petal.style.top = (-Math.random()*200) + "px"

const size = Math.random()*(maxSize-minSize)+minSize
petal.style.width = size + "px"

const duration = Math.random()*(maxSpeed-minSpeed)+minSpeed

const drift = (Math.random()-0.5)*150
petal.style.setProperty('--drift', drift+"px")

petal.style.animation = `fall ${duration}s linear forwards`

layer.appendChild(petal)

setTimeout(()=>{
petal.remove()
},duration*1000)

}

// เริ่มต้น (ลดลง)
for(let i=0;i<2;i++){
spawnPetal(back,20,30,12,18)
spawnPetal(mid,30,40,10,16)
spawnPetal(front,40,55,8,14)
}

// ตกต่อเนื่อง (ช้าลง)
setInterval(()=>spawnPetal(back,20,30,12,18),4500)
setInterval(()=>spawnPetal(mid,30,40,10,16),3500)
setInterval(()=>spawnPetal(front,40,55,8,14),2800)