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
exports.BookingsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const booking_entity_1 = require("./entities/booking.entity");
const teacher_entity_1 = require("../teachers/entities/teacher.entity");
let BookingsService = class BookingsService {
    constructor(bookingsRepository, teachersRepository) {
        this.bookingsRepository = bookingsRepository;
        this.teachersRepository = teachersRepository;
    }
    async create(createBookingDto) {
        const teacher = await this.teachersRepository.findOne({
            where: { id: createBookingDto.teacherId }
        });
        if (!teacher) {
            throw new common_1.NotFoundException('Teacher not found');
        }
        const booking = this.bookingsRepository.create(Object.assign(Object.assign({}, createBookingDto), { teacher }));
        const savedBooking = await this.bookingsRepository.save(booking);
        await this.sendConfirmationEmail(savedBooking);
        await this.notifyTeacher(savedBooking);
        return savedBooking;
    }
    async sendConfirmationEmail(booking) {
        console.log(`Sending confirmation email to ${booking.studentEmail}`);
    }
    async notifyTeacher(booking) {
        console.log(`Notifying teacher about new booking: ${booking.id}`);
    }
    async findAll() {
        return this.bookingsRepository.find({
            relations: ['teacher'],
            order: { createdAt: 'DESC' }
        });
    }
    async updateStatus(id, status) {
        await this.bookingsRepository.update(id, { status });
        const booking = await this.bookingsRepository.findOne({
            where: { id },
            relations: ['teacher']
        });
        if (!booking) {
            throw new common_1.NotFoundException(`Booking with id ${id} not found`);
        }
        return booking;
    }
};
exports.BookingsService = BookingsService;
exports.BookingsService = BookingsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(booking_entity_1.Booking)),
    __param(1, (0, typeorm_1.InjectRepository)(teacher_entity_1.Teacher)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], BookingsService);
//# sourceMappingURL=bookings.service.js.map