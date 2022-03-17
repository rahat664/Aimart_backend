import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {UsersModule} from './users/users.module';
import {ProductsModule} from './products/products.module';
import {SalesModule} from './sales/sales.module';
import {CollectionsModule} from './collections/collections.module';
import {MongooseModule} from '@nestjs/mongoose';
import {ConfigModule, ConfigService} from '@nestjs/config';

// const config = new ConfigService();
// const uri = config.get('MONGODB_URI');
const uri = 'mongodb+srv://rahat664:rahatn664@cluster0.ejev0.mongodb.net/aimart?retryWrites=true&w=majority';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    UsersModule,
    ProductsModule,
    SalesModule,
    CollectionsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
