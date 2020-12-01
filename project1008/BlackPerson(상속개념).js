/*
class 자식클래스명 extends 부모클래스명  :
BlackPerson 클래스는 Person 클래스의 코드까지 사용할 수 있도록 확장하겠다.
Parent x , Super o : super 라고 부른다.

//this 와 super 는 명칭이 이미 정해져 있는 예약어(java,c#,javascript 동일)
//this : 나를 가리키는 변수
//super : 부모를 가리키는 변수 

*/ 
class BlackPerson extends Person{
     constructor(){
          //this.name="nigro"; //에러발생 : 이유) 부모보다 시급한 초기화는 없기 때문
          //부모의 탄생이 최우선시 된다..당연) 부모가 존재해야 자식이 존재하니깐.
          super(5,10); //부모의 constructor() 임, 
                             //부모의 매개변수있는 경우, 값을 지정해줘야한다!! 
                             //부모 생성자 호출한 이유? 생물학적으로도 당연하다, 자식의 초기화 보다 최우선시
                             //해야 하는 작업은 부모의 존재, 즉 초기화 이므로
          this.name="nigro";//정상 수행 됨 : 이유) 부모 생성자 호출보다 아래에 두었기 때문

          //상태는 변수로 표현한다.즉 속성(property)
          this.color="Black";
          console.log("I am sub class(BlackPerson)");
     }
}