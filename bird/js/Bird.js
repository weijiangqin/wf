(function(Game){
    function Bird(option){
        this.img = option.img;
        this.width = this.img.width/3;
        this.height = this.img.height;
        this.ctx = option.ctx;
        this.x = option.x||100;
        this.y = option.y||100;
        this.index = 0;
        this.a = 0.0005;
        this.speed = 0;
        this.maxSpeed = 0.5;
        this.trangle = 0;
        this.maxTrangle = 45;
    };
    Bird.prototype = {
        constructor:Bird,
        render:function(durationTime){

            this.speed = this.speed+ durationTime*this.a;
            if(this.speed>this.maxSpeed){
                this.speed = this.maxSpeed;
            }
            this.y =this.y+this.speed*durationTime +1/2*this.a*durationTime*durationTime;
            this.trangle = this.speed/this.maxSpeed*this.maxTrangle;
            this.ctx.save();
            this.ctx.translate(this.x,this.y);
            this.ctx.rotate(this.trangle*Math.PI/180);
            this.ctx.drawImage(this.img,this.index*this.width,0,this.width,this.height,-this.width/2,-this.height/2,this.width,this.height);
            this.index++;
            this.index = this.index%3;
            this.ctx.restore();
        }
    };
    Game.Bird = Bird;
})(Game);