"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cat = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Cat = class Cat extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Cat.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Cat.prototype, "name", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Cat.prototype, "age", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'boolean',
        required: true,
    }),
    tslib_1.__metadata("design:type", Boolean)
], Cat.prototype, "friendly", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Cat.prototype, "playStyle", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'boolean',
        required: true,
    }),
    tslib_1.__metadata("design:type", Boolean)
], Cat.prototype, "fixed", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Cat.prototype, "breed", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Cat.prototype, "userId", void 0);
Cat = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Cat);
exports.Cat = Cat;
//# sourceMappingURL=cat.model.js.map