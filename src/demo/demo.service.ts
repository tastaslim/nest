import { Inject, Injectable } from '@nestjs/common';
import { Logger } from 'winston';

@Injectable()
export class DemoService {
  @Inject('winston') private readonly logger: Logger;
  public getCats(): string {
    // this.logger.info('Winston Logger');
    return 'cats';
  }
  public listCat(): string {
    return `Lists all cats successfully`;
  }
}
