/**
 * Source: Netnija TS tutorial
 */
import {Invoice} from './classes/Invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import {Payment} from './classes/Payment.js';
import {HasFormatter} from './Interfaces/HasFormatter.js';

// let docOne: HasFormatter;
// let docTwo: HasFormatter;

// docOne = new Invoice('Yoshi','web work', 250);
// docTwo = new Payment('Mario','Plumbing work', 200);

// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);

// console.log(docs);


// interface IsPerson {
//     name: string;
//     age:number;
//     speak(a:string):void;
//     spend(a:number):number;
// }

// const me: IsPerson = {
//     name:'Don',
//     age:30,
//     speak(text:string):void {
//         console.log(text);
//     },
//     spend(amount:number):number{
//         console.log('I Spent ',amount);
//         return amount;
//     }
// };
// const greetPerson = (person:IsPerson)=>{
//     console.log('hello ', person.name);
// }
// greetPerson(me);

// const refund = (person:IsPerson)=>{
//     let amt = person.spend(30);
//     console.log("you get back "+ amt);
// }

// refund(me);



// const invOne = new Invoice('Mario','work on Mario website',250);
// const invTwo = new Invoice('Louigi','work on Louigi website',350);
// console.log(invOne , invTwo);

// let invoices: Invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo);

// invoices.forEach(inv => {
    
//     console.log(inv.client,inv.amount,inv.format());
// })

const form = document.querySelector('.new-item-form') as HTMLFormElement;
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;


//list template instance 
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener("submit",(e:Event) => {
    e.preventDefault();

    let values : [string,string,number]; //tuple

    values  = [tofrom.value,details.value,amount.valueAsNumber];

    let doc: HasFormatter;
    if(type.value === 'invoice'){
        doc = new Invoice(...values);//... spread operator

    }else{
        doc = new Payment(...values);
    }

    list.render(doc,type.value,'end');
    console.log(doc);
});

// const addUID =  <T extends {name:string}>(obj: T) => {
//     let uid = Math.floor(Math.random() * 1000);
//     return {...obj,uid}; // object properties destructed with attached properties
// }
// let docOne = addUID({name:'Sravya',age:27});
// let docTwo = addUID({name:'hola'});
// // console.log(docOne.);


// enum resourceType {BOOK, AUTHOR, FILM, DIRECTOR, PERSON}

// interface Resource<T> {
//     uid:number;
//     resourceName: resourceType;
//     data:T
// }
// const docThree : Resource<object> = {
//     uid:1,
//     resourceName:resourceType.PERSON,
//     data:{name:'aple'}
// }

// const docFour: Resource<string[]>={
//     uid:2,
//     resourceName: resourceType.BOOK,
//     data: ['b','t','a']
// }

// console.log(docThree);
// console.log(docFour);

// let arr = ['arr',25,true];
// arr[0] = false;
// arr[1] = 'yoshi';
// arr = [30, false, 'yoshi'];

// let tup: [string,number,boolean]= ['ryu',25,true];

// tup[0] = 'ken';
// tup[1] = 30;