// 게임의 주인공 비행기를 정의한다.

class Hero{

     //주인공이 태어날때, 어떠한 초기화작업을 진행할지를 결정짓는 메서드
     //특히 생성자 메서드라 부른다.
     //아래의 생성자함수를 호출하는 자는, 반드시 주인공 이미지가 붙게될
     //부모 요소를 전달해야 한다. 즉 container 변수값을 결정지어야 한다.
     constructor(container,x,y,width,height){
          //중요! constructor안에 선언된 변수는 현재 객체(인스턴스)것이다!!
          //this가 붙어 있는 변수는 , 해당 인스턴스와 생명력을 같이 한다.
          //즉 해당 인스턴스마다 각각 고유하게 보유할 수 있는 변수
          //언제 소멸되나? 인스턴스가 살아있는 한..
          //현재 인스턴스의 변수는 4개가 있다.(this 가 붙은것 : this.babo, this.x, this.y, this.img)
          this.babo="바봉";
          this.x=x; //인스턴스가 가지고 있게 하기위해 this.x 로 변수선언하였다. = 매개변수 x는 브레이스 안에서만 살아간다
          this.y=y;

          //생성자 내에서는 반드시 변수명앞에 this 를 명시해야한다.
          //왜? 객체안에서의 코드 작성이므로.
          this.img=document.createElement("img");//<img>
          this.img.src="../images/shooting/plane.png";
          this.img.style.position="absolute"
          this.img.style.left=x+"px";
          this.img.style.top=y+"px";
          this.img.style.width=width+"px";
          this.img.style.height=height+"px";
          //화면에 부착하기!!
          //부모요소에 부착하자
          container.appendChild(this.img);


     }

     //비행기의 동작방식을 결정짓는 메서드
     move(){

     }
}