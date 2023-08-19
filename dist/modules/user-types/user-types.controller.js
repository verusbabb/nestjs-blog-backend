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
exports.UserTypesController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const user_types_service_1 = require("./user-types.service");
const create_user_type_dto_1 = require("./dto/create-user-type.dto");
const update_user_type_dto_1 = require("./dto/update-user-type.dto");
const swagger_1 = require("@nestjs/swagger");
let UserTypesController = exports.UserTypesController = class UserTypesController {
    constructor(userTypesService) {
        this.userTypesService = userTypesService;
    }
    create(createUserTypeDto) {
        return this.userTypesService.create(createUserTypeDto);
    }
    findAll() {
        return this.userTypesService.findAll();
    }
    findOne(userTypeId) {
        return this.userTypesService.findOne(userTypeId);
    }
    update(userTypeId, updateUserTypeDto) {
        return this.userTypesService.update(userTypeId, updateUserTypeDto);
    }
    remove(userTypeId) {
        return this.userTypesService.remove(userTypeId);
    }
};
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201, type: String }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_type_dto_1.CreateUserTypeDto]),
    __metadata("design:returntype", void 0)
], UserTypesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: String }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserTypesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':userTypeId'),
    openapi.ApiResponse({ status: 200, type: String }),
    __param(0, (0, common_1.Param)('userTypeId', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserTypesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':userTypeId'),
    openapi.ApiResponse({ status: 200, type: String }),
    __param(0, (0, common_1.Param)('userTypeId', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_user_type_dto_1.UpdateUserTypeDto]),
    __metadata("design:returntype", void 0)
], UserTypesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':userTypeId'),
    openapi.ApiResponse({ status: 200, type: String }),
    __param(0, (0, common_1.Param)('userTypeId', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserTypesController.prototype, "remove", null);
exports.UserTypesController = UserTypesController = __decorate([
    (0, swagger_1.ApiTags)('User Types'),
    (0, common_1.Controller)('user-types'),
    __metadata("design:paramtypes", [user_types_service_1.UserTypesService])
], UserTypesController);
//# sourceMappingURL=user-types.controller.js.map