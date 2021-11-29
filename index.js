const clouds = document.querySelectorAll(".hole");
const scoreBoard = document.querySelector(".score");
const heads = document.querySelectorAll(".head");
let lastCloud;

let timeUp = false; //false if not finished and true if finished
let score = 0;

function randomTime(min,max){
    return Math.round(Math.random()*(max-min) + min);
}
function randomCloud(clouds){
    const indexCloud = Math.floor(Math.random()*clouds.length);
    const cloudSelect = clouds[indexCloud];
    if(cloudSelect == lastCloud){
        return randomCloud(clouds);
    }
    lastCloud = cloudSelect;
    return cloudSelect;
}

function showHead1(){
    const time = randomTime(600, 1000);
    const cloud = randomCloud(clouds);
    cloud.classList.add("up");
    setTimeout(() => {
        if(!timeUp) showHead1();
        cloud.classList.remove("up");
    } ,time);
}
function showHead2(){
    const time = randomTime(500, 800);
    const cloud = randomCloud(clouds);
    cloud.classList.add("up");
    setTimeout(() => {
        if(!timeUp) showHead2();
        cloud.classList.remove("up");
    } ,time);
}
function showHead3(){
    const time = randomTime(250, 500);
    const cloud = randomCloud(clouds);
    cloud.classList.add("up");
    setTimeout(() => {
        if(!timeUp) showHead3();
        cloud.classList.remove("up");
    } ,time);
}
function playerScore(event){
    if(!event.isTrusted) return;
    score++;
    this.classList.add("up");
    scoreBoard.textContent = score;
}
heads.forEach(head => head.addEventListener("click", playerScore));

function startGame1(){
    scoreBoard.textContent = 0;
    timeUp = false;
    showHead1();
    setTimeout(() => {
        timeUp = true;
        setTimeout(() => {
            scoreBoard.textContent = "END"
        }, 2000);
    }, 10000)
}
function startGame2(){
    scoreBoard.textContent = 0;
    timeUp = false;
    showHead2();
    setTimeout(() => {
        timeUp = true;
        setTimeout(() => {
            scoreBoard.textContent = "END"
        }, 2000);
    }, 10000)
}
function startGame3(){
    scoreBoard.textContent = 0;
    timeUp = false;
    showHead3();
    setTimeout(() => {
        timeUp = true;
        setTimeout(() => {
            scoreBoard.textContent = "END"
        }, 2000);
    }, 10000)
}
const speed= 50;
var i = 0;
var text1 = "EASY";

var j = 0;
var text2 = "MEDIUM";

var k = 0;
var text3 = "DIFFICULT";

function typeWriter1(){
    if(i< text1.length){
        document.getElementById("demo1").innerHTML += text1.charAt(i);
        i++;
        setTimeout(typeWriter1, speed);
    }
}
function typeWriter2(){
    if(j< text2.length){
        document.getElementById("demo2").innerHTML += text2.charAt(j);
        j++;
        setTimeout(typeWriter2, speed);
    }
}
function typeWriter3(){
    if(k< text3.length){
        document.getElementById("demo3").innerHTML += text3.charAt(k);
        k++;
        setTimeout(typeWriter3, speed);
    }
}
function myClick(){
    for(var i=1; i<=3; i++){
        document.getElementById("demo"+i).addEventListener("click", function(){
            document.getElementById("demo1").style.display = "none";
            document.getElementById("demo2").style.display = "none";
            document.getElementById("demo3").style.display = "none";
        });
    }
}
document.getElementById("morty-play").addEventListener("click", function(){
    typeWriter1();
    typeWriter2();
    typeWriter3();
    myClick();
});
