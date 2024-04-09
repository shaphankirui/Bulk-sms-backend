import { Controller, Post, Body } from '@nestjs/common';
import { SmsSendingService } from './sms-sending.service';
import { SendSMSDto } from './smsData.dto';

@Controller('sms-sending')
export class SmsSendingController {
  constructor(private readonly smsSendingService: SmsSendingService) {}

  @Post('send')
  async sendSMS(@Body() sendSMSDto: SendSMSDto) {
    // Log received data
    console.log('Received data:', sendSMSDto);

    // Call the sendSMS method from SmsSendingService to send the SMS
    await this.smsSendingService.sendSMS(sendSMSDto.phoneNumber, sendSMSDto.message);

    // Optionally, return a response to the client
    return { message: 'SMS sent successfully' };
  }
}
