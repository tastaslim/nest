import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { createTest } from 'src/Test/dto/createTestDTO';

@Injectable()
export class DataTransformationPipe implements PipeTransform {
  transform(value: createTest, metadata: ArgumentMetadata) {
    console.log('Pipe running: ', metadata);
    return {
      name: value.name,
      age: value.myAge,
      phone: value.myPhone,
    };
  }
}
