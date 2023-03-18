const username:string = "miguel"

const sum = (a:number, b:number)=>{
  return a + b
}

const resta = (a:number, b:number):number => a - b;

sum(5,5)
resta(5,6)


class Person {
  //private age: number;
  //lastname:string;

  constructor(public age:number,public lastname:string){
    //this.age = age;
    //this.lastname = lastname;
  }

}

const miguel = new Person( 28 , 'miguel')

miguel.age;
