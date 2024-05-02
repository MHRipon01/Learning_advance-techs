//Basic Data Types

//String
let firstName : string = 'Ripon'

let roll:number = 1402

//boolean 
let isAdmin: boolean = true

//undefined
let x : undefined = undefined

//null 
let y: null = null


let d;  //typescript infers the type as anytime. 

d = 132
d = 'slh'
d=true

//but if u know what will be the data type in future than u can tell the type
let c:number;
c=342
// c='sldk' //won't work as we defined c as number type before.
// c=true //won't work as we defined c as number type before.

let friends:string[] = ['rachel' , 'Monica']
// friends.push(7) //'number' is not assignable to parameter of type 'string'.
let eligibleRollList:number[] = [1,2,4]


//tuple --> array --> order --> type of values
let coordinates : [number , number] =[1,5]

let ageName : [number , string , boolean] = [50, 'MHR' , true]



