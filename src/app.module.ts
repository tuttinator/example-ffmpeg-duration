import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DurationModule } from './duration/duration.module';
import { FilesModule } from './files/files.module';

@Module({
  imports: [DurationModule, FilesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
