import { KafkaContext } from '@nestjs/microservices';
import { EmailService } from './email.service';
export declare class EmailController {
    private readonly emailService;
    constructor(emailService: EmailService);
    helloWorldConsumer(): string;
    readMessageAndSendEmail(emailData: any, context: KafkaContext): Promise<void>;
}
