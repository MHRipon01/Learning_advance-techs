{
  //Utility Types

  //Pick utility
  type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: string;
  };

  type Name = Pick<Person, "name">;
  type NameAge = Pick<Person, "name" | "age">;

  //Omit utility
  type ContactInfo = Omit<Person, "name" | "age">;

  //Required utility
  type PersonRequired = Required<Person>;

  //Partial utility
  type PersonPartial = Partial<Person>;


  //ReadOnly utility
  type PersonReadOnly = Readonly<Person>

  const person1: PersonReadOnly = {
    name: "Ripon",
    age: 200,
    contactNo: "017",
  };

//   person1.name = "alumin"; //can be assign value anytime if 
//not readonly


//Record Utility
// type MyObj = {
//     a:string;
//     b:string;
// }

// const obj1 : MyObj = {
//     a: 'aa',
//     b: 'bb',
//     c:'akd' //Object literal may only specify known properties, and 'c' does not exist in type 'MyObj'
// }

type MyObj = Record<string , string>
const obj1 : MyObj = {
    a: 'aa',
    b: 'bb',
    c:'cc' , 
    d:'dd',
}


type MyObj1 = Record<string,  number>

const EmptyObj : Record<string , unknown> = {}
 





  //end
}
