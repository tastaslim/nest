# Middleware
* Middleware is a function which is called before route handler.
* Middleware functions have access to the request and response objects, and the next() middleware function in the application’s request-response cycle. 
* The next middleware function is commonly denoted by a variable named next.
![Middleware](Middleware.drawio.svg)

Middleware functions can perform the following tasks:
* execute any code.
* end the request-response cycle.
* call the next middleware function in the stack.
* if the current middleware function does not end the request-response cycle, it must call next() to pass control to the next middleware function. Otherwise, the request will be left hanging.
> <span style="color:red">Note:</span>.
:**Middlewares are executed in the same order we define them in our code:**


![Cycle](cycle.drawio.svg)
* Like **express** middleware, **Nest** middleware also take 3 arguments.
   1. req // Request type
   2. res // Response type
   3. next // Function type 
```
use(req:Request, res:Response, next:Function){
    |
    |
    |
}
```

## Types of Middleware: ## 
- In Nest js middlewares are implemented in two ways:
   1. Functional based
   2. Class based using **@Injectable()**

> ### 1. Class based Middleware: ### 
 - Custom middlewares are implemented in a class with  @Injectable() decorator. The class should implement the NestMiddleware interface.
  ```
  import {Injectable,NestMiddleware} from '@nestjs/common';
  import {Request,Response} from 'express';
  @Injectable() 
  export class LoggerMiddleware implements NestMiddleware{
      use(req:Request, res:Response,next:Function){
          console.log('Logger middleware. Implement some logic inside this function.');
      }
      next();// If it is last to be executed, there is no need to use next()
  }
  ```
  - Now, we have defined logger middleware, we have to decide between request and response cycle of which route we have to implement this middleware.
  - Hence, For that particularModule has to implement NestModule interface and inside that we can apply this middleware for particular route.
  ```
   import {NestModule,Module,MiddlewareConsumer} from '@nestjs/common'; // MiddlewareConsumer to consume Middleware
   import {BookModule} from 'our custom path/books.module.ts';
   import {LoggerMiddleware} from 'our custom path/logger.middleware.ts';
   @Module({
       imports:[BookModule]
   })
   @Injectable() 
   class SomeModule implements NestModule{
       configure(consumer:MiddlewareConsumer){ // Synchronous function but we can make this configure function asynchronous using async/await.
           consumer
           .apply(LoggerMiddleware)
           .forRoutes('/books); // It tells that LoggerMiddleware will be implemented between request response cycle of '/books' route.
       }
   }
  ```
## Very Important: ## 
**1. ForRoutes():** 
 
 This function can take a single route, multiple routes, a single controller, multiple controllers etc.
- In most of the cases we will be passing controller inside it. Let's say we want to implement LoggerMiddleware for Cats. Hence instead of passing all routes, we will pass **CatController** inside the findRoute function.
  
**2. apply():**

This function is used to pass single or multiple middlewares which we want to apply on anything(example: CatController, DogController etc.)

```
import {NestModule,Module,MiddlewareConsumer} from '@nestjs/common'; // MiddlewareConsumer to consume Middleware
import {BookModule} from 'our custom path/books.module.ts';
import {LoggerMiddleware} from 'our custom path/logger.middleware.ts';
import {CatController} from 'our path/cat/cat.controller.ts'
import {DogController} from 'our path/dog/dog.controller.ts'

@Module({
    imports:[BookModule]
})
@Injectable()
class SomeModule implements NestModule{
    configure(consumer:MiddlewareConsumer){ // Synchronous function but we can make this configure function asynchronous using async/await.
    consumer
    .apply(LoggerMiddleware)// can use multiple middlewares here separated by ,
    .forRoutes(CatController, DogController); // It tells that LoggerMiddleware will be implemented between request response cycle of '/books' route.
}
}

```
- You can even exclude some routes in a controller where middleware is not supposed to be applied.
```
import {NestModule,Module,MiddlewareConsumer} from '@nestjs/common'; // MiddlewareConsumer to consume Middleware
import {BookModule} from 'our custom path/books.module.ts';
import {LoggerMiddleware} from 'our custom path/logger.middleware.ts';
import {CatController} from 'our path/cat/cat.controller.ts'
import {DogController} from 'our path/dog/dog.controller.ts'

@Module({
    imports:[BookModule]
})
@Injectable()
class SomeModule implements NestModule{
    configure(consumer:MiddlewareConsumer){ // Synchronous function but we can make this configure function asynchronous using async/await.
    consumer
    .apply(LoggerMiddleware)// can use multiple middlewares here separated by ,
    .exclude({
        path:'cats',method:'GET',
        path:'cats/subcats',method:RequestMethod.GET,        
        path:'cats/subcats',method:RequestMethod.POST
    })
    .forRoutes(CatController, DogController); // It tells that LoggerMiddleware will be implemented between request response cycle of '/books' route.
}
}

```

> ### 2. Function based Middleware: ### 
* Pretty much similar to express.
```
export function loggerMiddleware(req:Request, res:Response,next:Function){
    console.log('Logger middleware. Implement some logic inside this function.');
    next();// If it is last to be executed, there is no need to use next()
}

// Consume same way we did for class middleware
```