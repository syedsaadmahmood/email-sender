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
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const email_entity_1 = require("./email.entity");
let EmailService = exports.EmailService = class EmailService {
    constructor(emailRepository) {
        this.emailRepository = emailRepository;
    }
    async sendEmail(message, emailData) {
        const { id, to, subject, body, time_sent, email_number, num_emails, status, } = emailData;
        console.log(`Consumer! Received email ${email_number}, message: ${message} request at ${time_sent} :`, {
            to,
            subject,
            body,
            time_sent,
            email_number,
        });
        try {
            await this.send(id, email_number, to, subject, body);
            const response = `In Consumer! Email No. ${email_number} sent successfully to ${to} and status updated to 'sent'`;
            console.log(response);
            return response;
        }
        catch (error) {
            console.error('Error sending email:', error.message);
            throw error;
        }
    }
    async send(id, email_number, to, subject, body) {
        await this.emailRepository.update(id, { status: 'sent' });
    }
};
exports.EmailService = EmailService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(email_entity_1.Email)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], EmailService);
//# sourceMappingURL=email.service.js.map