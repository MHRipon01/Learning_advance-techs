{
    //
    //union types
    // type FrontendDeveloper = 'fakibazDeveloper' | 'juniorDeveloper'
    // type FullstackDeveloper = 'frontendDeveloper' | 'expertDeveloper'


    // type Developer = FrontendDeveloper | FullstackDeveloper



    // const newDeveloper : FrontendDeveloper = 'fakibazDeveloper'


    // type User = {
    //     name: string;
    //     email?: string;
    //     gender: 'male' | 'female';
    //     bloodGroup: "O+" | 'A+' | 'AB+'
    // }

    // const user1 : User = {
    //     name: 'Ripon',
    //     gender: 'male',
    //     bloodGroup: 'O+'
    // }


    type FrontendDeveloper = {

        skills: string[];
        designation1: 'Frontend Developer';

    }

  type BackendDeveloper = {

        skills: string[];
        designation2: 'Backend Developer';
        
    }

    type FullstackDeveloper = FrontendDeveloper & BackendDeveloper

    const fullstackDeveloper : FullstackDeveloper ={
        skills:['html' , 'Css'],
        designation1:'Frontend Developer',
        designation2: 'Backend Developer'
    }





}