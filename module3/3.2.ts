{
  //Inheritance -- OOP
  class Parent {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }

    getSleep(numOfHours: number) {
      console.log(`${this.name} will sleep for ${numOfHours} hours`);
    }
  }




  class Student extends Parent {
    // name: string;
    // age: number;
    // address: string;

    constructor(name: string, age: number, address: string) {
     super(name ,age ,address)
    }

    // getSleep(numOfHours: number) {
    //   console.log(`${this.name} will sleep for ${numOfHours} hours`);
    // }
  }

  const student1 = new Student("mr. student", 30, "uganda");
  // student1.

  class Teacher extends Parent{
    designation: string;

    constructor(
      name: string,
      age: number,
      address: string,
      designation: string
    ) {
      super(name ,age ,address)
      this.designation = designation;
    }


    takeClass(numOfClass: number) {
      console.log(`${this.name} will sleep for ${numOfClass} hours`);
    }
  }

  const teacher = new Teacher("mr. teacher", 30, "uganda", "Lecturer");
  // teacher.

  //end
}
