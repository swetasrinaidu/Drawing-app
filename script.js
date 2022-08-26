const canvas = document.getElementById("canvas");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const clear = document.getElementById("clear");
let color = document.getElementById("color");
let sizeEl = document.getElementById("size");
const line =document.getElementById("line");
const circle =document.getElementById("circle");


const ctx = canvas.getContext("2d");

let x1;
let y1;
let size = 5;
let mousePressed = false;
let linePressed = false;
let circlePressed = false;

canvas.addEventListener("mousedown", (e) => {
    mousePressed = true;
    x1 = e.offsetX;
    y1 = e.offsetY;

});
canvas.addEventListener("mouseup", (e) => {
    mousePressed = false;
    x1 = undefined;
    y1 = undefined;

});

canvas.addEventListener("mousemove", (e) => {
    if (mousePressed === true) {
        x2 = e.offsetX;
        y2 = e.offsetY;
        if(linePressed) drawLine(x1, x1, x2, y2);
        if(circlePressed) drawCircle(x2, y2,size);
    }

});

function drawLine(x1, y1, x2, y2) {
    ctx.lineWidth = 2;
    ctx.strokeStyle = color;
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}
function drawCircle(x, y, r) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    // ctx.fillStyle = "gray";
    // ctx.fill();
    ctx.stroke();
    console.log(ctx);

}
increase.addEventListener("click",()=>{
    size++;
    if(size>30){
        size=30;
    }
    updateSize(size);

});
decrease.addEventListener("click",()=>{
    size--;
    if(size<5){
        size=5;
    }
    updateSize(size);
});

clear.addEventListener("click",()=>{
    ctx.clearRect(0,0,canvas.width,canvas.height);
});

color.addEventListener("change",(e)=>{
    color=e.target.value;
});

line.addEventListener("click",()=>{
    if(linePressed){
         line.style.backgroundColor="gray";
         linePressed = false;
    }
    else{
        line.style.backgroundColor="red";
         linePressed = true;
    }
    
})
circle.addEventListener("click",()=>{
    if(circlePressed){
        circlePressed = false;
        circle.style.backgroundColor = "gray";
    }
    else{
         circlePressed = true;
         circle.style.backgroundColor="red";
    }
})

function updateSize(size){
   sizeEl.innerText=size;
}
