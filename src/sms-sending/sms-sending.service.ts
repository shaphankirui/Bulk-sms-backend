import { Injectable } from '@nestjs/common';
import { env } from 'process';
import * as twilio from 'twilio';

@Injectable()
export class SmsSendingService {
  private readonly twilioClient: twilio.Twilio;

  constructor() {
    this.twilioClient = twilio(env.TWILIO_ACCOUNT_SID, env.TWILIO_AUTH_TOKEN);
  }

  async sendSMS(phoneNumber: string, message: string) {
    try {
      // Use the Twilio client to send the SMS
      await this.twilioClient.messages.create({
        to: phoneNumber,
        from: env.TWILIO_PHONE_NUMBER,
        body: message,
      });
    } catch (error) {
      // Handle any errors that occur during SMS sending
      console.error('Error sending SMS:', error.message);
      throw new Error('Failed to send SMS');

    }
  }
}
