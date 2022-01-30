import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { Products, productSchema } from 'src/schemas/products.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: Products.name, schema: productSchema}])],
  controllers: [ProductsController],
  providers: [ProductsService]
})
export class ProductsModule {}
