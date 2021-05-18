`
 1 problem which we are going to face is that we defined a common property inside base class and it is applicable to all children and
 is not supposed to be overridden by any child class.
 So what we did, we created an Abstract class(base class) and we defined a non abstract common function inside it.
 Now since it is not supposed to be overridden by any child class, it doesn't make sense to write this function inside any child class.
 But at the same time we can not create instance of an abstract class, right.
`;

`
Then how do we access this function?
Here comes static method in picture, declare all those common, non overriding functions as static and simple call them with the help respective child
class name or base class name.
We know for static methods only one copy of it is shared across all classes in the hierarchy.
`;
`
We should use static methods whenever, The code in the method is not dependent on instance creation and is not using
any instance variable. A particular piece of code is to be shared by all the instance methods. The definition of the
method should not be changed or overridden.
`;

/*
   Inside a class, a static method can only access static properties of same or different class while a 
   non-static method can access both static as well as non-static members of same or different class.
*/
// abstract class Base {
//   private Taslim = 'animal';
//   protected static getType() {
//     return this.Taslim; // gives error because we are accessing non static property inside static method.
//   }
// }

`With the help of super keyword we can only access non static members of a class. To access a static member of a class
use "className.memberName"`;
abstract class Animal {
  private static Taslim = 'animal';
  public static age: number;
  protected constructor(age) {
    Animal.age = age; // why this.age is also working but it should not work. It is very confusing.
    // I got it that this with static members works inside static members but why does it work? It should not.
  }
  protected static getType(): string {
    return this.Taslim;
  }
  getAge(): number {
    return 20;
  }
}

class Cat2 extends Animal {
  public static socket = 20;
  constructor() {
    super(20);
  }
  public getInfo(): void {
    console.log({
      name: 'cat',
      type: Animal.getType(),
      age: this.getAge(),
    });
  }
}

const catData = new Cat2();
catData.getInfo();
