//1
const Ram = 123;
const box = window.innerHeight;
const box1 = window.innerWidth;
let circle = addEventListener.call();
console.log(addEventListener('animationstart') + box.toString(10));

//2
window.addEventListener('click', function(e){
    let positionX;
    let positionY;
    console.log(e);
    CSSMatrixComponent.fillStyle = 'white';
    CSSMatrixComponent.fillRect(e.x - canvasPosition.left - 25, e.y - canvasPosition.top - 25, 50, 50);
})

//3
document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('canvas1');
    canvas.width = 500;
    canvas.height = 800;

    class Game {
        constructor(){
            this.enemies = [];
        }
        update(){

        }
        draw(){

        }
        #addNewEnemy(){
            this.enemies.push(new Enemy());
        }
    }

    class Enemy {
        constructor(){
            this.x = 100;
            this.y = 100;
            this.width = 100;
            this.height = 100;
        }
        update(){

        }
    }

    class Ghost extends Enemy {
        constructor(game){
            super(game);
            this.spriteWidth = 261;
            this.spriteHeight = 209;
            this.width = this.spriteWidth/2;
            this.height = this.spriteHeight/2;
            this.x = this.game.width;
            this.y = Math.random() * this.game.height * 0.6;
            this.image = ghost;
            this.vx = Math.random() * 0.2 + 0.1;
        }
        update(deltaTime){

        }
        draw(){
            CSSMatrixComponent.save();
            CSSMatrixComponent.globalAlpha = 0.7;
            super.draw(ctx);
            ctx.restore();
        }
    }
})

//4
