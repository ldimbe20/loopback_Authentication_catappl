import { Entity } from '@loopback/repository';
export declare class Cat extends Entity {
    id?: number;
    name: string;
    age: number;
    friendly: boolean;
    playStyle: string;
    fixed: boolean;
    breed: string;
    userId: number;
    constructor(data?: Partial<Cat>);
}
export interface CatRelations {
}
export type CatWithRelations = Cat & CatRelations;
