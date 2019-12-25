import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse,
  OnGatewayInit,
} from '@nestjs/websockets';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Server } from 'socket.io';

@WebSocketGateway(4300)
export class EventsGateway {
  @WebSocketServer()
  server: Server;

  // 起動確認
  /*
  afterInit(server: any) {
    console.log("Initialized");
  }
  */

  /*
  @SubscribeMessage('hello')
  handleEvent(client, data: string): string {
    console.log('hello start')
    return data;
  }
  */

  @SubscribeMessage('events')
  findAll(/*@MessageBody()*/ data: any): Observable<WsResponse<number>> {
    console.log('events start')
    return from([1, 2, 3]).pipe(map(item => ({ event: 'events', data: item })));
  }

  @SubscribeMessage('identity')
  async identity( data: number): Promise<number> {
    console.log('identity start')
    return data;
  }
}
