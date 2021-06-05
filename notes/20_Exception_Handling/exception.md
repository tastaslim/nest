## Exception: ##
Nest comes with a built-in exceptions layer which is responsible for processing all unhandled exceptions across an application. When an exception is not handled by your application code, it is caught by this layer, which then automatically sends an appropriate user-friendly response.

- This action is performed by built-in **global Exception Filter** which handles all types of **HttpException** and it's sub classes. If the exception is other than **HttpException** and it's sub classes, then built-in exception filter
gives us default exception as:
```
{
    "statusCode": 500,
    "message": "Internal server error"
}

```
- Throwing exception:
```
import {HttpException} from '@nestjs/common';
export class CatController{
    @Get()
    async findAll() {
        throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
}
```

### Custom Exception ###
- To throw a custom exception, we need to extend a standard HttpException class provided by Nest js.
- Now what we could do is provide custom exception body inside constructor of custom exception class.
```
import {HttpException} from '@nestjs/common';
export class customException extends HttpException{
    constructor(){
        super('Forbidden',HttpStatus.FORBIDDEN)
    }
}
``` 
```
import {HttpException} from '@nestjs/common';
export class CatController{
    @Get()
    async findAll() {
        throw new customException();
    }
}
```
## Exception Filters: ## 
- While the base (built-in) exception filter can automatically handle many cases for you, you may want full control over the exceptions layer. 
- For example, you may want to add logging or use a different JSON schema based on some dynamic factors. Exception filters are designed for exactly this purpose. They let you control the exact flow of control and the content of the response sent back to the client.
- For this we need access of inner Request, Response so that we can log valuable information such as url, error, status code etc. which we already have(using express Request, Response) because under the hood nest uses **express**.

```
import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { Request, Response } from 'express';
@Catch(HttpException)
export class MyHttpExceptionFilter implements HttpExceptionFilter{
    catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();
        const status = exception.getStatus();
        response
        .status(status)
        .json({
            statusCode: status,
            timestamp: new Date().toISOString(),
            path: request.url,
        });
    }
}
```
- The @Catch(HttpException) decorator binds the required metadata to the exception filter, telling Nest that this particular filter is looking for exceptions of type HttpException and nothing else

---
* Now, since we have created our own ExceptionFilter, we need to bind this exception filter either with any function or whole controller.
```
@Controller('cats')
export class CatController{
    @Get('/name')
    /*
    we can pass new instance of MyHttpExceptionFilter class(new MyHttpExceptionFilter()). But it is not recommended to do, because by pass class we can share same instance of class across all controllers which saves our time and reduces memory use.
    */
    @UseFilters(MyHttpExceptionFilter) 
    getName(){
        throw new ForbiddenException(); // body would be according to MyHttpExceptionFilter class

    }
}
```
>#### OR ####
```
@UseFilters(MyHttpExceptionFilter)
@Controller('cats')
export class CatController{
    @Get('/name')
    
    getName(){
        throw new ForbiddenException(); // body would be according to MyHttpExceptionFilter class

    }
}
```
