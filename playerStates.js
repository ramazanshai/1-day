export class Jumping extends State {
    constructor(player){
        super('JUMPING');
        this.player = player;
    }
    enter(){
        if (this.player.onGround()) this.player.vy -= 27;
        this.player.frameX = 0;
        this.player.maxFrame = 6;
        this.player.frameY = 1;
    }
    handleInput(input){
        if (this.player.vy > this.player.weight){
            this.player.setState(states.FALLING, 1);
        } else if (input.includes('Enter')){
            this.player.setState(states.ROLLING, 2);
        }
    }
}

