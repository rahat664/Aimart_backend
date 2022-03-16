import {Injectable} from '@nestjs/common';

@Injectable()
export class AppService {
  getHealthInfo(): any {
    return {
      lastUpdate: new Date(),
      status: 'OK',
      author: 'Rahat Kabir',
    };
  }
}
