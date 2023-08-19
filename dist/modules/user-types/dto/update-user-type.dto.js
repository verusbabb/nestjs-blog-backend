"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserTypeDto = void 0;
const openapi = require("@nestjs/swagger");
const mapped_types_1 = require("@nestjs/mapped-types");
const create_user_type_dto_1 = require("./create-user-type.dto");
class UpdateUserTypeDto extends (0, mapped_types_1.PartialType)(create_user_type_dto_1.CreateUserTypeDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateUserTypeDto = UpdateUserTypeDto;
//# sourceMappingURL=update-user-type.dto.js.map