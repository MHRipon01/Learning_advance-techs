{
  //generic type

  type GenericArray<T> = Array<T>;

  //   const rollNumbers: number[] = [3, 5, 7];
  const rollNumbers: GenericArray<number> = [3, 5, 7]; //another way

  //   const mentors: string[] = ["x", "y", "z"];
  const mentors: GenericArray<string> = ["x", "y", "z"]; //another way

  //   const boolArray: boolean[] = [true, false, true];
  const boolArray: GenericArray<boolean> = [true, false, true]; //another way


  const user: GenericArray<{name:string , age:number}>= [
    {
        name: 'Ripon',
        age: 343
    },
    {
        name: 'Abir',
        // age:'222',
        age:222
    },
   
  ]

  const add = (x: number, y: number) => x + y;
  add(3, 5);

  //generic tuple

  const manush : [string ,string]= ['Mr. x' , 'Mrs. Y'] //normal tuple

  type GenericTuple<X,Y> = [X,Y]
  const manush2 :GenericTuple<string ,string>= ['Mr. x' , 'Mrs. Y'] //generic tuple
  

  const UserWithID : GenericTuple<number , {name:string , email: string}> = [ 1234,
    {
        name: "Mezba" , 
        email: 'a@gmail.com'
    },
    
  ]









  //end
}
