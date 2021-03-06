import { Invoice } from './classes/Invoices.js';
import { HasFormatter } from './interfaces/HasFormatter.js';
import { Payment } from './classes/Payment.js';
import { ListTemplate } from './classes/ListTemplate.js';

const invOne = new Invoice('mario', 'work on the mario website', 250);
const invTwo = new Invoice('luigi', 'work on the luigi website', 300);

// invOne.client = 'yoshi';
// invOne.amount = 50;

let invoices: Invoice[] = [];
invoices.push(invOne)
invoices.push(invTwo);

invoices.forEach(inv => {
  console.log(inv.client, /*inv.details,*/ inv.amount, inv.format());
})



const form = document.querySelector('.new-item-form') as HTMLFormElement;
console.log(form.children);

// inputs
const type = document.querySelector('#type') as HTMLInputElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

let doc: HasFormatter;
if(type.value ==='invoice') {
  doc=new Invoice(tofrom.value,details.value,amount.valueAsNumber);
}

else{
  doc=new Payment(tofrom.value,details.value,amount.valueAsNumber);
}
list.render(doc, type.value, 'end');
});