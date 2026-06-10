const screen1 = document.getElementById("screen1");
const screen2 = document.getElementById("screen2");
const screen3 = document.getElementById("screen3");
const screen4 = document.getElementById("screen4");
const screen5 = document.getElementById("screen5");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

let attempts = 0;

function moveButton(){

const x =
Math.random() *
(window.innerWidth - 120);

const y =
Math.random() *
(window.innerHeight - 80);

noBtn.style.left = x + "px";
noBtn.style.top = y + "px";

attempts++;

const texts = [
"No 😭",
"Really?",
"Come on 😭",
"Not happening",
"Try harder 😂",
"You can't catch me"
];

if(attempts < texts.length){
noBtn.innerText = texts[attempts];
}

}

setInterval(moveButton,2000);

noBtn.addEventListener("mouseover",moveButton);

yesBtn.onclick = ()=>{

screen1.classList.add("hidden");
screen2.classList.remove("hidden");

};

document.getElementById("continueBtn")
.onclick=()=>{

screen2.classList.add("hidden");
screen3.classList.remove("hidden");

};

document.getElementById("nextBtn")
.onclick=()=>{

const date =
document.getElementById("date").value;

const time =
document.getElementById("time").value;

localStorage.setItem("date",date);
localStorage.setItem("time",time);

screen3.classList.add("hidden");
screen4.classList.remove("hidden");

};

document.querySelectorAll(".food")
.forEach(btn=>{

btn.addEventListener("click",()=>{

const date =
localStorage.getItem("date");

const time =
localStorage.getItem("time");

screen4.classList.add("hidden");
screen5.classList.remove("hidden");

document.getElementById("summary")
.innerHTML=

`
📅 Date: ${date}<br><br>
⏰ Time: ${time}<br><br>
🍴 Food: ${btn.innerText}<br><br>

Be ready. 🚗
`;

});

});

function createHeart(){

const heart =
document.createElement("div");

heart.className = "particle";

heart.innerHTML = "💖";

heart.style.left =
Math.random()*100+"vw";

document.body.appendChild(heart);

setTimeout(()=>{
heart.remove();
},8000);

}

setInterval(createHeart,800);
