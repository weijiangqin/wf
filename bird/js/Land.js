(function(Game){
 function Land(option){
       this.ctx = option.ctx;
       this.img = option.img;
       this.width = option.img.width;
       this.height =option.img.height;
       this.index  = option.index||0;
       this.x = this.width*this.index;
       this.y = this.ctx.canvas.height - this.height;
       this.offset = this.x;
 };
 Land.prototype = {
   constructor : Land,
   render:function(){
       this.offset-=10;
       if(this.offset<this.x-this.width){
            this.offset = this.x;
       }
       this.ctx.drawImage(this.img,0,0,this.width,this.height,this.offset,this.y,this.width,this.height);
   }
 };
    Game.Land=Land;
})(Game);