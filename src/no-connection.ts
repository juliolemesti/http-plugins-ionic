import { Injectable } from '@angular/core';
import { Network } from 'ionic-native';
import { PreRequestPlugin } from '@ramonornela/http';
import { NoConnectionException } from './exception';

@Injectable()
export class NoConnectionPlugin implements PreRequestPlugin {

  getPriority(): number {
    return -1;
  }

  getName() {
    return 'no-connection-mobile';
  }

  preRequest() {
    if (Network.connection === 'none') {
      throw new NoConnectionException('Not Connection');
    }
  }
}