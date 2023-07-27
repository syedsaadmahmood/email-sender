import { Repository } from 'typeorm';
import { Email } from './email.entity';
export declare class EmailService {
    private readonly emailRepository;
    constructor(emailRepository: Repository<Email>);
    sendEmail(message: string, emailData: any): Promise<string>;
    send(id: string, email_number: number, to: string, subject: string, body: string): Promise<void>;
}
