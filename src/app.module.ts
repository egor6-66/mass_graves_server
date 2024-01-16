import { Module } from '@nestjs/common';
import { AdminModule } from './admin/admin.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';

@Module({
  controllers: [],
  providers: [],
  imports: [
    AdminModule,
    ConfigModule.forRoot({
      envFilePath: process.env.NODE_ENV === 'prod' ? '.prod.env' : '.dev.env',
      isGlobal: true,
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      models: [],
      autoLoadModels: true,
    }),
  ],
})
export class AppModule {}
