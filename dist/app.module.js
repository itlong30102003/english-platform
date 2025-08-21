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
const typeorm_1 = require("@nestjs/typeorm");
const config_1 = require("@nestjs/config");
const teachers_module_1 = require("./teachers/teachers.module");
const bookings_module_1 = require("./bookings/bookings.module");
const teacher_entity_1 = require("./teachers/entities/teacher.entity");
const booking_entity_1 = require("./bookings/entities/booking.entity");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: process.env.DB_HOST || 'localhost',
                port: 5432,
                username: process.env.DB_USERNAME || 'postgres',
                password: process.env.DB_PASSWORD || 'sa',
                database: process.env.DB_NAME || 'english_platform',
                entities: [teacher_entity_1.Teacher, booking_entity_1.Booking],
                synchronize: true,
            }),
            teachers_module_1.TeachersModule,
            bookings_module_1.BookingsModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map