// import { Controller, Post, Body } from '@nestjs/common';
// import { SmsSendingService } from './sms-sending.service';
// import { SendSMSDto } from './smsData.dto';

// @Controller('sms-sending')
// export class SmsSendingController {
//   constructor(private readonly smsSendingService: SmsSendingService) {}

//   @Post('send')
//   async sendSMS(@Body() sendSMSDto: SendSMSDto) {
//     console.log('Received data:', sendSMSDto);

//     await this.smsSendingService.sendSMS(sendSMSDto.phoneNumber, sendSMSDto.message);

//     return { message: 'SMS sent successfully' };
//   }
// }
