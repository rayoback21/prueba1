import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ManagementModule } from './management/management.module';
import { Management } from './management/entities/management.entity';


@Module({
  imports: [ManagementModule, Management],
  controllers: [AppController],
  providers: [AppService],

})
export class AppModule {}
