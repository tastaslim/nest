/* eslint-disable @typescript-eslint/no-unused-vars */

// Adapter and bridge pattern to read.

`An abstract class(Half defined class) is mainly used to define default behavior for subclasses, it
means that all child classes should have performed the same functionality.
Now one question which might come into your mind is that why can't we just declare normal class as base class:`;
console.log(
  `1. See, we generally write common properties inside base class( Generalization and Specialization) and all the child class inheriting this base
  class will implement common properties according to themselves. Hence, we should make sure that no one defines methods inside base class
  instead they just declare those methods there.
  2. We should make sure that base class shouldn't be instantiated otherwise it would be very confusing, because we want to share common properties among all
     not to define those for base as well. Base class meaning Generalization( It doesn't make sense for defining something for generalized one) and individula
     child classes meaning Specialization.
  3. One more problem with normal base class is that we can't force developer to implement common methods inside all child classes.
  4. We can not create objects of abstract class.`,
);

/*  */
// With super keyword, we can only access public and protected ``methods`` of the base class
class base {
  protected salary: string;
  protected age: number;

  // Although Money() method is common across all child classes but we have to write some dummy definition of it because we can't only declare methods
  //inside normal classes
  public Money(age, salary): number {
    return age * salary;
  }
}

class child1 extends base {
  constructor() {
    super();
  }
  getAge() {
    return 1;
  }
}

class child2 extends base {
  constructor() {
    super();
  }
  Money(age, salary) {
    return age * (salary - (salary * 10) / 100);
  }
}

class child3 extends base {
  constructor() {
    super();
  }
  Money(age, salary) {
    return age * (salary - (salary * 20) / 100);
  }
}
/* 
 const obj = new child1();
 console.log(obj.getAge());
*/

/*  
  With super keyword, we can only access public and protected ``methods`` of the base class.
  Since abstract classes are base classes and abstract properties are declared to implemented by child classes,
  we can not declare any abstract property as private.
*/
abstract class baseClass {
  protected abstract salary: string;
  protected age: number;
  /* Although we can write constructor of abstract class but can't use any abstract property inside it.
    constructor(age, salary) {
     this.age = age;
     this.salary = salary; // this line will give error
   }
  */
  // Now by making baseClass abstract, we can declare abstract methods and enforce all child classes to implement these methods.
  public abstract Money(age, salary): number;
}

// const abc = new baseClass(1, 2); // --> will give error
class childBase1 extends baseClass {
  protected salary: string;
  constructor() {
    super();
  }
  Money(age, salary): number {
    return age * ((salary * 15) / 100);
  }
}

class childBase2 extends baseClass {
  protected salary: string;
  Money(age, salary) {
    return age * (salary - (salary * 10) / 100);
  }
}

class childBase3 extends baseClass {
  protected salary: string;
  Money(age, salary) {
    return age * (salary - (salary * 20) / 100);
  }
}

/* 
  It is a bad design to make everything abstract inside an abstract class and this is the only case when an abstract class starts
  looking like an interface because now like an interface we are enforcing child classes to implement everything inside abstract 
  class.
  In IT industry, there is a saying that Production me Chalte hue code ko nahi cherne ka.
*/
console.log(
  `
    A. An abstract class is a good choice if we are using the inheritance concept since it provides a common base class
       implementation to derived classes.
    B. An abstract class is also good if we want to declare non-public members. In an interface, all methods must be public.
    C. If we want to add new methods in the future, then an abstract class is a better choice. Because if we add new methods
       to an interface, then all of the classes that already implemented that interface will have to be changed to implement the
       Interface but let's say one few of child classes need that function.
       Hence in that case, we have two options:
         1. Add that function inside existing interface and implement that inside all child classes and whichever classes don't
            need that functionality simple throw and exception saying that method not required/implemented( which is very bad desing
            and not recommended at all.)
         
        2. create a new interface which contains the required functionality and let only those child classes implement this interface
           which require the functionality inside this interface.(recommended but better to use abstract class for such cases)
           
`,
);

`
Interface: It is like a contract between multiple clients.
A. It is used to enforce developers to implement everything inside it.
B. A class can implement multiple interfaces( It is like multiple inheritance).
C. All the methods inside an interface are public and abstract(you can not definde methods inside an interface.).
D. Benefit with interface is that we can easily create new interface whenever we require but we can only have one
   abstract class in our heirarchy.
`;

interface Taslim {
  age: number;
  getAge(): number;
}

class Arif1 implements Taslim {
  age: number;
  getAge(): number {
    return this.age;
  }
}

class Arif3 implements Taslim {
  age: number;
  getAge(): number {
    return this.age * 3;
  }
}

// Let's say now in future Arif2 class requires printHello() method but not others. Then we can follow above two options(1,2) in C.
// better to create new interface and let Arif2 implement it.
class Arif2 implements Taslim, Tsa {
  printHello(): void {
    console.log(`Hello`);
  }
  age: number;
  /* See even though this method was not required for Arif2 class but still we have to implement and throw Error like this*/
  getAge(): number {
    throw new Error('Method not implemented.');
  }
}

interface Tsa {
  printHello(): void;
}
/*
 ******************************** When to use What *****************************
 */
`Abstract classes provide you the flexibility to have certain concrete methods and some other methods that the derived classes
should implement. By contrast, if you use interfaces, you would need to implement all the methods in the class that extends the
interface. An abstract class is a good choice if you have plans for future expansion – i.e. if a future expansion is likely in
the class hierarchy. If you would like to provide support for future expansion when using interfaces, you’ll need to extend the
interface and create a new one.
On a different note, it is easy to add a new interface to the hierarchy if need be. However, if you already have an abstract
class in your hierarchy, you can’t add another—i.e., you can add an abstract class only if none are available. You should use
an interface if you want a contract on some behavior or functionality. You should not use an interface if you need to write
the same code for the interface methods. In this case, you should use an abstract class, define the method once, and reuse it
as needed. Do use interfaces to decouple your application’s code from specific implementations of it, or to restrict access
to members of a certain type.`;
