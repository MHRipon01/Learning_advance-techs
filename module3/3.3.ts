{
  //type guards

  //typeof --> type guard
  // const add = (param1: string|number , param2:string|number) :string| number => {
  //     return param1+param2 //Operator '+' cannot be applied to types 'string | number' and 'string | number'.
  // }

  //system-1
  //   const add = (
  //     param1: string | number,
  //     param2: string | number
  //   ): string | number => {
  //     if (typeof param1 === "number" && typeof param2 === "number") {
  //       return param1 + param2;
  //     } else {
  //       return param1.toString() + param2.toString();
  //     }
  //   };

  //system-2

  type Alphaneumeric = string | number;

  const add = (param1: Alphaneumeric, param2: Alphaneumeric): Alphaneumeric => {
    if (typeof param1 === "number" && typeof param2 === "number") {
      return param1 + param2;
    } else {
      return param1.toString() + param2.toString();
    }
  };

  const result1 = add(2, 5);
  const result2 = add("2", "5");
  console.log(result1);
  console.log(result2);

  // in guard

  type NormalUser = {
    name: string;
  };

  type AdminUser = {
    name: string;
    role: "admin";
  };

  const getUser = (user: NormalUser | AdminUser) => {
    if ("role" in user) {
      console.log(`My name is ${user.name} and my role is ${user.role}`);
    } else {
      console.log(`My name is ${user.name}`);
    }
  };

  const normalUser: NormalUser = {
    name: "Mr normal bhai",
  };

  const adminUser: AdminUser = {
    name: "mr admin bhai",
    role: "admin",
  };
  getUser(adminUser);

  //end
}
