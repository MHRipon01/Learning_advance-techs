{
   
//Generic interface
interface Developer<T , X = null> { //X will be null by default.
    name:string;
    computer: {
        brand:string;
        model:string;
        releaseYear: number;
    }
    smartWatch: T;
    bike?: X
}


type EmilabWatch = {
    brand: string;
    model:string;
    display: string
}




const poorDeveloper : Developer<EmilabWatch> ={
    name:'Ripon',
    computer: {
        brand: 'Hp',
        model:'t43',
        releaseYear: 2013
    },
    smartWatch:{
        brand:'Emilab',
        model:'kw66',
        display: 'OLED'
    }
}


interface AppleWatch{
    brand:string;
    model:string;
    heartTrack: boolean;
    sleepTrack: boolean;
}

interface YamahaBike {
    model: string;
    engineCapacity: string;
}



const richDeveloper : Developer<AppleWatch ,YamahaBike> ={
    name:'Ripon',
    computer: {
        brand: 'Asus',
        model:'t43',
        releaseYear: 2013
    },
    smartWatch:{
        brand:'Apple watch',
        model:'something',
        heartTrack: true,
        sleepTrack: true,
    },
    bike:{
        model: 'Yamaha',
        engineCapacity: '100cc',

    }
}





    //end
}