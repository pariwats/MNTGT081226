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

// ✅ กระจายทั้งหน้าจอจริง (ไม่กองซ้าย)
petal.style.left = Math.random() * 100 + "vw"

// ✅ เพิ่ม offset เริ่มต้นสุ่ม (ไม่เริ่มตรงขอบเดียวกัน)
const startOffset = Math.random() * -200
petal.style.top = startOffset + "px"

// ✅ ขนาดสุ่ม
const size=Math.random()*(maxSize-minSize)+minSize
petal.style.width=size+"px"

// ✅ ความเร็วสุ่ม
const duration=Math.random()*(maxSpeed-minSpeed)+minSpeed

// ✅ เพิ่ม drift ซ้ายขวา “ไม่เท่ากัน”
const drift = (Math.random() - 0.5) * 200 // -100 ถึง 100px

petal.style.animation = `
fall ${duration}s linear forwards,
sway ${duration * 0.7}s ease-in-out infinite,
spin ${duration * 0.8}s linear infinite
`

// ✅ custom property ให้ sway ใช้
petal.style.setProperty('--drift', drift + 'px')

// delay แบบสุ่ม
petal.style.animationDelay = `${Math.random()*2}s, 0s, 0s`

layer.appendChild(petal)

// ลบเมื่อจบ
setTimeout(()=>{
petal.remove()
},duration*1000)

}

// เริ่มต้น
for(let i=0;i<3;i++){
spawnPetal(back,20,30,14,18)
spawnPetal(mid,30,40,12,16)
spawnPetal(front,40,55,10,14)
}

// spawn ต่อเนื่อง (บาลานซ์แล้ว)
setInterval(()=>spawnPetal(back,20,30,14,18),3000)
setInterval(()=>spawnPetal(mid,30,40,12,16),2300)
setInterval(()=>spawnPetal(front,40,55,10,14),1800)