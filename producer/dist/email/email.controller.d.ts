import { ClientKafka } from '@nestjs/microservices';
import { EmailService } from './email.service';
export declare class EmailController {
    private readonly emailService;
    private readonly client;
    constructor(emailService: EmailService, client: ClientKafka);
    onModuleInit(): Promise<void>;
    onModuleDestroy(): Promise<void>;
    getHello(): string;
    testKafka(): import("rxjs").Observable<any>;
    testKafkaWithResponse(): import("rxjs").Observable<any>;
    kafkaProducerEndpoint(): any;
    produceEmail(emailData: any): Promise<{
        message: string;
        status: number;
    }>;
}
