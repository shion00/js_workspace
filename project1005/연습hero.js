
class Hero{
     constructor(x,y,width,height){
          this.img;
          this.x=x;
          this.y=y;
          this.width=width;
          this.height=height;

          this.img=document.createElement("img");
          this.img.style.position="absolute";
          this.img.style.left=this.x+"px";
          this.img.style.top=this.y+"px";
          this.img.style.width=this.width+"px";
          this.img.style.height=this.height+"px";

          wrapper.appendChild(this.img);
     }
     tick(){

     }
     render(){

     }
}