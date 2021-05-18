// import { Bank } from './Bank';
// import { HDFC } from './HDFC';
// const b: HDFC = new Bank();
` It doesn't matter what type of varibale we are creating, only thing matters here
 is that varibale is instance of which class and hence in all cases below, only loanCriteria() method
 of base Bank class will be called. That is why we say make those functions and class abstract which is going to
 be shared across all childs so that we don't need to define function( in our case loanCriteria()) inside base
 class.
 Now you got it why it doesn't make sense to create object of base class and it is recommended to create base
 class as an abstract class.
 `;

/*
const b: HDFC = new Bank();
const b: ICIC = new Bank();
const b: AXIS = new Bank();
*/
// const ans1 = b.loanCriteria();
// console.log(ans1);

` Now how to access functions which are defined inside base and common for all child classes
Simply create objects of respective child classes and since child classes are inheriting base class, they
will have access of each funtion of base class.`;
/* 
const h:HDFC=new HDFC();
h.creditMoney(2000)
const i:ICIC=new ICIC();
i.creditMoney(100)
*/
