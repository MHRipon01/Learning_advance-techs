//destructuring
const User = {
  id: 323,
  name: {
    firstName: "Mehedi",
    middleName: "Hasan",
    lastName: "Ripon",
  },
  contactNo: "01725458512",
  address: "Uganda",
};


const {contactNo , name:{middleName: midName}} = User


//array destructuring
const myFriends = ['chandler' , 'joey', 'ross' , 'rachel' , 'monica' , 'phoebe']

const [a , b ,bestFriend , ...rest] = myFriends