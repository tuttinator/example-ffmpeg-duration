import { Module } from '@nestjs/common';
import { DurationService } from './duration.service';

@Module({
  providers: [DurationService],
})
export class DurationModule {}
