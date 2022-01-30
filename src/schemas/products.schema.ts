import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type productsDocument = Products & Document;

@Schema()
export class Products {
  @Prop()
  name: string;

}

export const productSchema = SchemaFactory.createForClass(Products);