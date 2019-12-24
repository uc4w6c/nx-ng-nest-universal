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

  post(emitName: String, data?) {
    // this.socket.emit(emitName, data, response => console.log(response));
    // this.socket.on(emitName, data, response => console.log(response));
    let socket = this.socket;
    let _data = data;
    console.log('start')
    return new Promise((resolve, reject) => {
      console.log('aa');
      socket.emit(emitName, _data, resolve);
      console.log('bb');
    });

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
