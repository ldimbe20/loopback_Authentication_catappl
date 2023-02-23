"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let CatController = class CatController {
    constructor(catRepository) {
        this.catRepository = catRepository;
    }
    async create(cat) {
        return this.catRepository.create(cat);
    }
    async count(where) {
        return this.catRepository.count(where);
    }
    async find(filter) {
        return this.catRepository.find(filter);
    }
    async updateAll(cat, where) {
        return this.catRepository.updateAll(cat, where);
    }
    async findById(id, filter) {
        return this.catRepository.findById(id, filter);
    }
    async updateById(id, cat) {
        await this.catRepository.updateById(id, cat);
    }
    async replaceById(id, cat) {
        await this.catRepository.replaceById(id, cat);
    }
    async deleteById(id) {
        await this.catRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/cats'),
    (0, rest_1.response)(200, {
        description: 'Cat model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Cat) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Cat, {
                    title: 'NewCat',
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Cat]),
    tslib_1.__metadata("design:returntype", Promise)
], CatController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/cats/count'),
    (0, rest_1.response)(200, {
        description: 'Cat model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Cat)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CatController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/cats'),
    (0, rest_1.response)(200, {
        description: 'Array of Cat model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Cat, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Cat)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CatController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/cats'),
    (0, rest_1.response)(200, {
        description: 'Cat PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Cat, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Cat)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Cat, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CatController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/cats/{id}'),
    (0, rest_1.response)(200, {
        description: 'Cat model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Cat, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Cat, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CatController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/cats/{id}'),
    (0, rest_1.response)(204, {
        description: 'Cat PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Cat, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Cat]),
    tslib_1.__metadata("design:returntype", Promise)
], CatController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/cats/{id}'),
    (0, rest_1.response)(204, {
        description: 'Cat PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Cat]),
    tslib_1.__metadata("design:returntype", Promise)
], CatController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/cats/{id}'),
    (0, rest_1.response)(204, {
        description: 'Cat DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], CatController.prototype, "deleteById", null);
CatController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.CatRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.CatRepository])
], CatController);
exports.CatController = CatController;
//# sourceMappingURL=cat.controller.js.map