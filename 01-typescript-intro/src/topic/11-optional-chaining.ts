export interface Passenger{
    name:string;
    children?: string[];
}

const pasenger1: Passenger={
    name: 'Fer'
}

const pasenger2: Passenger={
    name: 'Melisa',
    children: ['Nata','Eli']
}

const printChildren= (pasenger: Passenger)=>{
    const howManyChildren= pasenger.children?.length || 0;

    console.log(pasenger.name, howManyChildren)
}
//printChildren(pasenger1);
//printChildren(pasenger2);

const returnChildrenNumber= (pasenger: Passenger):number =>{
    const howManyChildren= pasenger.children!.length;

    console.log(pasenger.name, howManyChildren)
    
    return howManyChildren;
}
returnChildrenNumber(pasenger1);
returnChildrenNumber(pasenger2);