import { Component, OnInit, OnDestroy, PLATFORM_ID, Inject } from '@angular/core';
import { WebSocketSubject } from 'rxjs/webSocket';
import { WebsocketService } from '../websocket.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'ss-test-websocket',
  templateUrl: './websocket.component.html',
  styleUrls: ['./websocket.component.scss']
})
export class WebsocketComponent implements OnInit, OnDestroy {
  connection;
  data;
  message;
  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId,
               private websocketService: WebsocketService) {

    this.isBrowser = isPlatformBrowser(platformId);
  }

  onClick(){
    this.websocketService.emit('events', { test: 'test' });
    // this.websocketService.post('identity', 0);
    console.log('click start');
    // これも意味ない
    /*
    this.websocketService.emit('identity', 0);
    this.connection = this.websocketService.on('identity').subscribe(data => {
      // this.data = data;
      console.log(data);
      this.message = data;
    });
    */
    
    // this.websocketService.post('identity', 0);
    /*
    this.websocketService.post('identity', 0).then((response) => {
      console.log('click aa')
      console.log(response);
    })
    */
    console.log('click end')
  }

  ngOnInit() {
    if (this.isBrowser) {
      // this.websocketService.connect('0');
      this.websocketService.connect();
      // console.log(this.websocketService.emit('hello', 'hello'));

      // this.websocketService.emit('events', { test: 'test' });
      this.connection = this.websocketService.on('events').subscribe(data => {
        // this.data = data;
        console.log(data);
        this.message = data;
      })
    }
  }

  ngOnDestroy() {
    if (this.isBrowser) {
      this.connection.unsubscribe();
    }
  }
}
