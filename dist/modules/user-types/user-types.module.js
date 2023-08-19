"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserTypesModule = void 0;
const common_1 = require("@nestjs/common");
const user_types_service_1 = require("./user-types.service");
const user_types_controller_1 = require("./user-types.controller");
const sequelize_1 = require("@nestjs/sequelize");
const user_type_model_1 = require("./model/user-type.model");
let UserTypesModule = exports.UserTypesModule = class UserTypesModule {
};
exports.UserTypesModule = UserTypesModule = __decorate([
    (0, common_1.Module)({
        imports: [sequelize_1.SequelizeModule.forFeature([user_type_model_1.UserType])],
        controllers: [user_types_controller_1.UserTypesController],
        providers: [user_types_service_1.UserTypesService],
    })
], UserTypesModule);
//# sourceMappingURL=user-types.module.js.map