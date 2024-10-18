class Game {
    constructor(width, height){
        this.width = width;
        this.height = height;
        this.groundMargin = 80;
        this.speed = 0;
        this.maxSpeed = 3;
        this.background = new Background(this);
        this.player = new Player(this);
        this.input = new InputHandler(this);
        this.UI = new UI(this);
        this.enemies = [];
        this.particles = [];
        this.maxParticles = 50;
        this.enemyTimer = 0;
        this.enemyInterval = 1000;
        this.debug = true;
        this.score = 0;
        this.fontColor = 'black';
        this.player.currentState = this.player.states[0];
        this.player.currentState.enter();
    }
}

//1
window.addEventListener('click', function(e){
    const detectPixelColor = ctx.getImageData(e.x, e.y, 1, 1);
    console.log(detectPixelColor);
});

function animate(timestamp){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let deltaTime = timestamp - lastTime;
    lastTime = timestamp;
    timeToNextRaven += deltaTime;
    if (timeToNextRaven > ravenInterval){
        ravens.push(new Raven());
        timeToNextRaven = 0;
    };
    drawScore();
    [...ravens].forEach(object => object.update(deltaTime));
    [...ravens].forEach(object => object.draw());
    ravens = ravens.filter(object => !object.markedForDeletion);
    requestAnimationFrame(animate);
}
animate(0);

//2
const backgroundLayer1 = new Image();
backgroundLayer1.src = 'layer-1.png';
const backgroundLayer2 = new Image();
backgroundLayer2.src = 'layer-2.png';
const backgroundLayer3 = new Image();
backgroundLayer3.src = 'layer-3.png';
const backgroundLayer4 = new Image();
backgroundLayer4.src = 'layer-4.png';
const backgroundLayer5 = new Image();
backgroundLayer5.src = 'layer-5.png';

function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.drawImage(backgroundLayer4, x, 0);
    ctx.drawImage(backgroundLayer4, x2, 0);
    if (x < -2400) x = 2400 - gameSpeed;
    else x -= gameSpeed;
    if (x2 -= gameSpeed) x2 = 2400 - gameSpeed;
    else x2 -= gameSpeed;
    requestAnimationFrame(animate);
};
animate(0);

