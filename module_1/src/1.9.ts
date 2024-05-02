{
//Type alias
type Student = {
    name: string;
    age:number;
    gender:string;
    contactNo?: string;
    address:string;
}

const student1: Student = {
    name: 'Ripon',
    age:22,
    gender:"Male",
    contactNo:'0172532873',
    address:'Cumilla',
}

const student2: Student = {
    name: 'Mim',
    age:22,
    gender:"Female", 
    address:'dhk',
}


const student3: Student ={

        name: 'Tahsin',
        age:22,
        gender:"Female", 
        address:'dhk',
 
}


//string

type UserName = string
type IsAdmin = boolean
const userName : UserName = 'Ripon'
const isAdmin : IsAdmin = true


const add1 = (num1:number,num2:number):number => num1 + num2;

//other way 
type Add = (num1:number,num2:number) => number;
const add2:Add = (num1 , num2) => num1 + num2;




}