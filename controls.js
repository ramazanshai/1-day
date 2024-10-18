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