import { ClientKafka } from '@nestjs/microservices';
import { Server } from 'socket.io';
import { MyGateWay } from 'src/gateway/gateway';
import { Repository } from 'typeorm';
import { Email } from './email.entity';
export declare class EmailService {
    private readonly client;
    private readonly emailRepository;
    private readonly myGateway;
    constructor(client: ClientKafka, emailRepository: Repository<Email>, myGateway: MyGateWay);
    private io;
    setSocketInstance(io: Server): void;
    getHello(): string;
    kafkaProducer(): any;
    produceEmail(emailData: any): {
        message: string;
        status: number;
    };
}
