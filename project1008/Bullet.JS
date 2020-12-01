/*총알을 정의한다*/ 
class Bullet extends GameObject{
     constructor(container,src,width,height,x,y,velX,velY){
          super(container,src,width,height,x,y,velX,velY);
     }
     tick(){
          this.x=this.x+this.velX; //기존 x위치값에 속도만큼을 더해나간다.
     }
     render(){
          this.img.style.left=this.x+"px";
     }

}