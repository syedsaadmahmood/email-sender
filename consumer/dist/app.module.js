"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const typeorm_1 = require("@nestjs/typeorm");
const config_1 = require("@nestjs/config");
const email_controller_1 = require("./email/email.controller");
const email_entity_1 = require("./email/email.entity");
const email_module_1 = require("./email/email.module");
const email_service_1 = require("./email/email.service");
let AppModule = exports.AppModule = class AppModule {
};
exports.AppModule = AppModule = __decorate([
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
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: (configService) => ({
                    name: 'default',
                    type: 'mysql',
                    host: configService.get('DB_HOST'),
                    port: +configService.get('DB_PORT'),
                    username: configService.get('DB_USER'),
                    password: configService.get('DB_PASSWORD'),
                    database: configService.get('DB_DATABASE'),
                    entities: [],
                    synchronize: false,
                }),
            }),
            typeorm_1.TypeOrmModule.forFeature([email_entity_1.Email]),
            email_module_1.EmailModule,
        ],
        controllers: [email_controller_1.EmailController],
        providers: [email_service_1.EmailService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map