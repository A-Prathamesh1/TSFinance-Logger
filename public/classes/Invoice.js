export class Invoice {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    } // assigns passed arguments and declares the arguments 
    format() {
        return `${this.client} owes £${this.amount} for ${this.details}`;
    }
}
