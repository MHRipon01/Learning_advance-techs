{
//ternary operator || Optional chaining || nullish coalescing operator 
const age: number = 72;

// if(age >= 18){
//     console.log('Adult');
// }else{
//     console.log('Not adult');
// }

const isAdult = age >= 18 ? 'adult' : 'Not Adult';
// console.log({isAdult});


//nullish coalescing operator
//when to use? =>if I have to make decision based on null or undefined 
const isAuthenticated= null;

const result1 = isAuthenticated ?? 'guest'
const result2= isAuthenticated ? isAuthenticated : 'guest'

// console.log({result1} , {result2});

type User = {
    name : string;
    address: {
        city: string;
        road: string;
        presentAddress: string;
        permanentAddress?: string;
    }
}



const user:User ={
    name: 'Ripon',
    address: {
        city:'Ctg',
        road: 'Awesome road',
        presentAddress: 'ctg road'
    }
}



const permanentAddress = user?.address?.permanentAddress ??  'No permanent Address'
console.log({permanentAddress});














//
}