export {}
/*
function addNumers(a:number,b:number):number{
    return a+b;
}
const addNumberArrow= (a:number,b:number):string=>{
    return `${a+b}`;
}
const addNumberArrow2= (a:number,b:number):number=> a+b;

const result:number= addNumers(1,3);
*/
function multiply(
    firtNumber:number, 
    secondNumber?:number, 
    base:number= 2):number{
    return firtNumber * base;
}

//const multiplyResult:number= multiply(5);

interface Character{
    name:string;
    hp: number;
    showHp: ()=>void;
}

const heal= (character:Character,amount:number)=>{
    character.hp+= amount;
}

const strider:Character= {
    name: 'Strider',
    hp: 50,
    showHp(){
        console.log(`Puntos de vida ${this.hp}`)
    }
}
heal(strider,10);

strider.showHp();