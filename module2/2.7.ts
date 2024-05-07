{
//
type Vehicle = {
    bike: string;
    car:string;
    ship: string;
}

type Owner = "bike" | " car" | "ship"  //manually

type Owner2 = keyof Vehicle  //using keyof (Owner & Owner2 is same)

const person1 : Owner2 = "bike"

// const user = {
//     name: 'Ripon',
//     age:23,
//     address: 'Cumilla'
// }

//user['name'] => Ripon //rule: obj[key]


const getPropertyValue = <X ,Y extends keyof X > (obj:X, key: Y ) =>{
return obj[key];
}

const user = {
    name: 'Ripon',
    age:23,
    address: 'Cumilla'
 }


 const car = {
    model:"Toyota 200",
    year:2000,
 }

const result1 = getPropertyValue(user ,'name' )









    //end
}