import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SalesModule } from './sales/sales.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [SalesModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
