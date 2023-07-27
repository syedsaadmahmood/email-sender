import { WsResponse } from '@nestjs/websockets';
import { Observable } from 'rxjs';
import { Server } from 'socket.io';
export declare class MyGateWay {
    server: Server;
    findAll(data: any): Observable<WsResponse<number>>;
    emitEmailSentEvent(data: any): void;
    onNewMessage(body: any): void;
    onEmailSent(body: any): void;
}
