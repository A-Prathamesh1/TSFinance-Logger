import {HasFormatter} from '../Interfaces/HasFormatter.js';

export class Invoice implements HasFormatter{
    constructor(readonly client: string, private details: string, public amount: number)
    {} // assigns passed arguments and declares the arguments 
    format(){
        return `${this.client} owes £${this.amount} for ${this.details}`;
    }
}