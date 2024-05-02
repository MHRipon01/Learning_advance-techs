{
  //spread operator
  //rest operator
  //  destructuring


  //learning spread operator

  const bros1:string[]= ['naser' , 'anayet' , 'piyal']

  const bros2:string[] =['mostofa' , 'Tarek' , 'arif']

// bros1.push(bros2)
 //Argument of type 'string[]' is not assignable to parameter of type 'string'.

 bros1.push(...bros2)

 const mentors1= {
    typescript: 'mezba',
    redux: 'mir',
    dbms:'Mizan'
 }
const mentors2 ={
    prisma: 'Firoz',
    next:'tanmoy',
    cloude: 'nahid'
}

const mentorList = {
    ...mentors1 ,
    ...mentors2
}



//learning rest operator
const greetFriends = (...friends:string[]) => {
    // console.log(`hi ${friend1} ${friend2} ${friend3}`);

    friends.forEach((friend:string) => console.log(`Hi ${friend}`) )


greetFriends('abul' , 'babul', 'kabol')




}





}
