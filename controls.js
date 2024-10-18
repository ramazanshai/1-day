class Controls{
    constructor(){
        this.forward = false;
        this.left = false;
        this.right = false;
        this.reverse = false;

        this.addKeyboardListeners();
    }

    #addKeyboardListeners(){
        document.onkeydown = function(event){
            switch(event.key){
                case "ArrowLeft":
                    this.left = true;
                    break;
                case "ArrowRight":
                    this.right = true;
                    break;
                case "ArrowUp":
                    this.forward = true;
                    break;
                case "ArrowDown":
                    this.reverse = true;
                    break;
            }
            console.table(this);
        }
    }
}

//1
const A = {x:200, y:150};
const B = {x:150, y:250};
const C = {x:50, y:100};
const D = {x:250, y:200};

const ctx = myCanvas.getContext("2d");
ctx.beginPath();
ctx.moveTo(A.x,A.y);
ctx.lineTo(B.x,B.y);
ctx.moveTo(C.x,C.y);
ctx.lineTo(D.x,D.y);
ctx.stroke();
ctx.beginPath();
ctx.fillStyle = "white";

function drawDot(point, label){
    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.arc(point.x, point.y, 10, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = "bold 14px Arial";
    ctx.fillText("A", point.x, point.y);
}

drawDot(A,"A");
drawDot(B,"B");
drawDot(C,"C");
drawDot(D,"D");

const M = {
    x: lerp(A.x, B.x, 0.5),
    y: lerp(A.y, B.y, 0.5)
}

function lerp(A,B,t){
    return A+(B-A)*t;
}

function animate(){
    const radius = 50;
    A.x = mouse.x + Math.cos(angle) * radius;
    A.y = mouse.y - Math.sin(angle) * radius;
    B.x = mouse.x - Math.cos(angle) * radius;
    angle+=0.02;

    ctx.clearRect(0,0,myCanvas.width,myCanvas);
    ctx.beginPath();
    ctx.moveTo(A.x,A.y);
    ctx.lineTo(B.x,B.y);
    ctx.moveTo(C.x,C.y);
    ctx.lineTo(D.x,D.y);
    ctx.stroke();

    const I = getIntersection(A,B,C,D);
    if(I){
        drawDot(I,"I");
}
}

const tTop = (D.x - C.x) * (A.y - C.y) - (D.y - C.y);
const uTop = (C.y - A.y) * (A.x - B.x) - (C.x - A.x);
const bottom = (D.y - C.y) * (B.x - A.x) - (D.x - C.x);
