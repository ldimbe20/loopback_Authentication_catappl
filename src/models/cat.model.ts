import {Entity, model, property} from '@loopback/repository';

@model()
export class Cat extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'number',
    required: true,
  })
  age: number;

  @property({
    type: 'boolean',
    required: true,
  })
  friendly: boolean;

  @property({
    type: 'string',
    required: true,
  })
  playStyle: string;

  @property({
    type: 'boolean',
    required: true,
  })
  fixed: boolean;

  @property({
    type: 'string',
    required: true,
  })
  breed: string;

  @property({
    type: 'string',
    required: true,
  })
  userId: string;


  constructor(data?: Partial<Cat>) {
    super(data);
  }
}

export interface CatRelations {
  // describe navigational properties here
}

export type CatWithRelations = Cat & CatRelations;
