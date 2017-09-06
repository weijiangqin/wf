(function(Game){
     function Pipe(option){
          this.ctx = option.ctx;
          this.upImg = option.upImg;
          this.downImg = option.downImg;
          this.spaceX = 200;
          this.spaceY =150;
          this.index = option.index|| 0;
          this.x = (this.index+1)* this.spaceX;
          this.y = 0;
          this.imgWidth = this.upImg.width;
          // this.imgHeight = this.img.height;
          this.setPos();
     };
     Pipe.prototype = {
        constructor:Pipe,
        render:function(){
             this.x-=5;
             if(this.x<-this.spaceX){
                this.x = this.spaceX*4;
                this.setPos();
             }
             this.ctx.drawImage(this.upImg,0,this.upImg.height-this.y,this.imgWidth,this.y,this.x,0,this.imgWidth,this.y);
            this.ctx.drawImage(this.downImg,0,0,this.downImg.width,this.ctx.canvas.height-this.y-this.spaceY,this.x,this.y+this.spaceY,this.imgWidth,this.ctx.canvas.height-this.y-this.spaceY);


            this.ctx.rect(this.x,0,this.imgWidth,this.y);
            this.ctx.rect(this.x,this.y+this.spaceY,this.imgWidth,this.ctx.canvas.height-this.spaceY-this.y);

            // this.ctx.strokeStyle='red';
            // this.ctx.stroke();
        }
        ,
         setPos:function(){
             this.y = parseInt(Math.random()*100+100);
         }
     };
    Game.Pipe = Pipe;
})(Game);