"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var EmailModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailModule = void 0;
const common_1 = require("@nestjs/common");
const email_service_1 = require("./email.service");
const email_controller_1 = require("./email.controller");
const microservices_1 = require("@nestjs/microservices");
const typeorm_1 = require("@nestjs/typeorm");
const email_entity_1 = require("./email.entity");
let EmailModule = exports.EmailModule = EmailModule_1 = class EmailModule {
};
exports.EmailModule = EmailModule = EmailModule_1 = __decorate([
    (0, common_1.Module)({
        imports: [
            microservices_1.ClientsModule.register([
                {
                    name: 'any_name_i_want',
                    transport: microservices_1.Transport.KAFKA,
                    options: {
                        client: {
                            clientId: 'any_client_id_i_want',
                            brokers: ['localhost:29092'],
                        },
                        consumer: {
                            groupId: 'an_unique_string_id',
                        },
                    },
                },
            ]),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: '123321123',
                database: 'email_sender_db',
                entities: [email_entity_1.Email],
                synchronize: true,
            }),
            typeorm_1.TypeOrmModule.forFeature([email_entity_1.Email]),
            EmailModule_1,
        ],
        controllers: [email_controller_1.EmailController],
        providers: [email_service_1.EmailService],
    })
], EmailModule);
//# sourceMappingURL=email.module.js.map