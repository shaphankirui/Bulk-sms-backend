import { Module } from '@nestjs/common';
import { SmsSendingController } from './sms-sending.controller';
import { SmsSendingService } from './sms-sending.service';

@Module({
  controllers: [SmsSendingController],
  providers: [SmsSendingService]
})
export class SmsSendingModule {}
