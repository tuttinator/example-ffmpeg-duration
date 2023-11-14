import { Module } from '@nestjs/common';
import { FilesService } from './files.service';
import { FilesController } from './files.controller';
import { DurationModule } from 'src/duration/duration.module';

@Module({
  imports: [DurationModule],
  controllers: [FilesController],
  providers: [FilesService],
})
export class FilesModule {}
