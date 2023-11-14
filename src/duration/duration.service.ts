import { Injectable } from '@nestjs/common';

@Injectable()
export class DurationService {
  async getDuration(id: number): Promise<string> {
    // Find the file
    // Use ffprobe to get the duration
    // ffprobe -v quiet -print_format json -show_format -show_streams ${filename}
    // Get the duration
  }
}
