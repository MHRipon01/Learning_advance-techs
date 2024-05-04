{
  //
  //interface

  //declaring with type
  type User1 = {
    name: string;
    age: number;
  };

  type UserWithRole1 = User1 & { role: string }; //extending with type alias

  interface UserWithRole2 extends User2 {
    role: string
  }

  const user2: UserWithRole2 = {
    name: "Ripon",
    age: 21,
    role: "manager",
  };

  //Also type can be converted into interface with extends
  interface UserWithRole2 extends User1 {
    role: string
  }




  const user1: UserWithRole1 = {
    name: "Ripon",
    age: 21,
    role: "manager",
  };

  //using type alias in primitive data types
  type rollNumber = number;

  //declaring with interface
  interface User2 {
    name: string;
    age: number;
  }


  //js ==> object , array=> object ,function -> object
type Roll1 = number[];

interface Roll2 {
[index : number] : number
}

const rollNumber1: Roll1 = [1,2,3]
                 //index    0 1 2




type Add1 = (num1: number , num2: number) => number


interface Add2 {
    (num1:number , num2:number) : number
}

const add:Add2 = (num1 , num2) => num1 + num2 


//Suggestion: use type alias in array & function but for object you can interface


  //end
}
