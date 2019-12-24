import { Injectable } from '@angular/core';

import * as io from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  private url     = 'http://localhost:4300';
  private socket;

  /*
  connect(queryString: string) {
    this.socket = io(this.url, { query: queryString });
  }
  */
 connect() {
  this.socket = io(this.url);
 }

  emit(emitName: string, data?) {
    this.socket.emit(emitName, data);
  }

  on(onName: string) {
    let observable = new Observable(observer => {
      this.socket.on(onName, (data) => {
        observer.next(data);
      });

      return () => { this.socket.disconnect(); };
    });
    return observable;
  }

  // Maximum call stack size exceededが出力する。おそらくPromiseでresponseを取得してはいけない。
  post(emitName: String, data?) {
    console.log('start');
    // this.socket.emit(emitName, data, response => console.log(response));
    // this.socket.on(emitName, data, response => console.log(response));
    this.socket.on('connect', () => {
      this.socket.emit(emitName, data, response =>
        console.log('Identity:', response),
      );
      console.log('connect end');
    });

    /*
    これもだめ
    return new Promise(function(resolve, reject) {
      console.log('aa');
      socket.emit(emitName, 0, resolve);
      console.log('bb');
    });
    */

    /*
    これでもだめ
    return new Promise((resolve, reject) => {
      if (!this.socket) {
          reject('No socket connection.');
      } else {
          this.socket.emit(emitName, data, (response) => {
              if (response.error) {
                  console.error(response.error);
                  reject(response.error);
              } else {
                  resolve();
              }
          });
      }
    });
    */
    console.log('end')
  }
}
