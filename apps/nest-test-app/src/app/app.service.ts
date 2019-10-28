import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getData(): { message: string } {
    console.log('API Start')
    return ({ message: 'Welcome to nest-test-app!' });
  }
}
