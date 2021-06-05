import { Controller, Get } from '@nestjs/common';
import { DemoService } from './demo.service';

@Controller('demo')
export class DemoController {
  @Get('/cats')
  public getCats(): string {
    return new DemoService().getCats();
  }
  @Get('/cats/all')
  public deleteCat(): string {
    return new DemoService().listCat();
  }
}
