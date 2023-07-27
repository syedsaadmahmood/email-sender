"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailService = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const typeorm_1 = require("@nestjs/typeorm");
const gateway_1 = require("../gateway/gateway");
const typeorm_2 = require("typeorm");
const email_entity_1 = require("./email.entity");
let EmailService = exports.EmailService = class EmailService {
    constructor(client, emailRepository, myGateway) {
        this.client = client;
        this.emailRepository = emailRepository;
        this.myGateway = myGateway;
    }
    setSocketInstance(io) {
        this.io = io;
    }
    getHello() {
        return 'Hello World From Produce Email!';
    }
    kafkaProducer() {
        for (let i = 0; i < 10; i++) {
            this.client.emit('mail', {
                mail: 'mail',
                data: new Date().toString(),
            });
        }
        return {
            message: 'Message emitted from producer and sent successfully to consumer',
            status: 200,
        };
    }
    produceEmail(emailData) {
        const { to, numEmails, subject, body } = emailData;
        let date = new Date().toLocaleString();
        for (let i = 0; i < numEmails; i++) {
            let id = Math.floor(Math.random() * 1000000000000000).toString();
            let status = 'queued';
            const email = new email_entity_1.Email();
            email.id = id;
            email.to = to;
            email.subject = subject;
            email.body = body;
            email.timeSent = date;
            email.emailNumber = i;
            email.numEmails = numEmails;
            email.status = status;
            this.emailRepository.save(email);
            if (true) {
                this.myGateway.emitEmailSentEvent({
                    EmailNumber: i,
                    to: to,
                    subject: subject,
                    html: body,
                });
            }
            this.client.emit('mail', {
                id,
                to,
                subject,
                body,
                time_sent: date,
                email_number: i,
                num_emails: numEmails,
                status: status,
            });
        }
        return {
            message: `Congratulations 🎉! Emails sent successfully to the Kafka topic: medium.rocks`,
            status: 200,
        };
    }
};
exports.EmailService = EmailService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('any_name_i_want')),
    __param(1, (0, typeorm_1.InjectRepository)(email_entity_1.Email)),
    __metadata("design:paramtypes", [microservices_1.ClientKafka,
        typeorm_2.Repository,
        gateway_1.MyGateWay])
], EmailService);
//# sourceMappingURL=email.service.js.map