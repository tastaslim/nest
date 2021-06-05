## Guard ## 
![Guard](Guards_1.png)
A guard is a class annotated with the @Injectable() decorator. Guards should implement the **CanActivate** interface.
Guard has only one responsibility to check whether a request should be handled by route handler or not based on some conditions(exp: permission, rules etc.)