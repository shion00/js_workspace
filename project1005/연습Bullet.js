
class Bullet{
     constructor(src,width,height,x,y,container,velX,velY){
          this.img=document.createElement("img");
          this.img.src=src;
          this.width=width;
          this.height=height;
          this.x=x;
          this.y=y;
          this.velX=velX;
          this.velY=velY;
          this.container=container;

          this.img.style.width=this.width+"px";
          this.img.style.height=this.height+"px";
          this.img.style.position="absolute";
          this.img.style.left=this.x+"px";
          this.img.style.top=this.y+"px";

          this.container.appendChild(this.img);

     }
     
     tick(){
          this.x+=this.velX;
          this.y+=this.velY;
     }

     render(){
          this.img.style.left=this.x+"px";
          this.img.style.top=this.y+"px";

     }


}
