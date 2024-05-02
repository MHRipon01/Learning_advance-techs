{
  //nullable types || unknown type of
  //nullable types
  const searchName = (value: string) => {
    if (value) {
      console.log("Searching");
    } else {
      console.log("There is nothing to search");
    }
  };

  searchName(null);

  //unknown type
  const getSpeedInMeterPerSecond = (value: unknown) => {
    if (typeof value == "number") {
      const convertedSpeed = (value * 1000) / 3600;
      console.log(`The speed is ${convertedSpeed} ms^-1`);
    }
    if (typeof value === "string") {
      const [result, unit] = value.split(" ");
      console.log(result);
      const convertedSpeed = (parseFloat(result) * 1000) / 3600;
      console.log(`The speed is ${result} ms^-1`);
    } else {
      console.log("wrong input");
    }
  };

  getSpeedInMeterPerSecond(`1000 kmh^-1`);

//never 
const throwError = (msg:string): never => {
    throw new Error(msg)
}


// throwError('error hogeya')













  //End
}
