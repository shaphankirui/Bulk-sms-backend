import { Module } from '@nestjs/common';
import { OrginizationsController } from './orginizations.controller';
import { OrginizationsService } from './orginizations.service';

@Module({
  controllers: [OrginizationsController],
  providers: [OrginizationsService]
})
export class OrginizationsModule {}
