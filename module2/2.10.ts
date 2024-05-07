{
  //mapped types

  const arrOfNumbers: number[] = [1, 4, 5];
  // const arrOfStrings : string[] = ['1','4' , '5']

  const arrOfStrings : string[] = arrOfNumbers.map(number => number.toString())

  console.log(arrOfStrings);


type AreaNumber = {
    height: number;
    width: number;
}

// type AreaString = {
//     height : string;
//     width: string;
// }

type AreaString<T> = {
    [key in keyof T]: T[key];
}

const area1 : AreaString<{height:'string' ; width:'number'}> = { //with generic type
   height: '299',
   width:59
}


type Height = AreaNumber["height"] //look up type






  //end
}
