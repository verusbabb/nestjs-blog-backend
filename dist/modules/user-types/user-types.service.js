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
exports.UserTypesService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const user_type_model_1 = require("./model/user-type.model");
let UserTypesService = exports.UserTypesService = class UserTypesService {
    constructor(userTypeModel) {
        this.userTypeModel = userTypeModel;
    }
    create(createUserTypeDto) {
        return 'This action adds a new userType';
    }
    findAll() {
        return `This action returns all userTypes`;
    }
    findOne(id) {
        return `This action returns a #${id} userType`;
    }
    update(id, updateUserTypeDto) {
        return `This action updates a #${id} userType`;
    }
    remove(id) {
        return `This action removes a #${id} userType`;
    }
};
exports.UserTypesService = UserTypesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(user_type_model_1.UserType)),
    __metadata("design:paramtypes", [Object])
], UserTypesService);
//# sourceMappingURL=user-types.service.js.map