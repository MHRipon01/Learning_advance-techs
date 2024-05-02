//Reference type - Object

const user : {
    // company : string;
    company: 'P-hero'; //typer --> literal types (can be used in fixed values)
    firstName: string;
    MiddleName?: string; //optional type
    lastName: string;
    isMarried: boolean;

}
= 
{company:"P-hero",
    firstName: 'Mehedi',
    MiddleName: 'Hasan',
    lastName: 'Ripon',
    isMarried: false,
}


// user.company="PH" //can't be change also we can use ReadOnly to make this happen