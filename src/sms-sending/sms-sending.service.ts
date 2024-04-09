import { Injectable } from '@nestjs/common';
import * as twilio from 'twilio';

@Injectable()
export class SmsSendingService {
  private readonly twilioClient: twilio.Twilio;

  constructor() {
    // Initialize Twilio client with your Twilio credentials
    this.twilioClient = twilio('ACb9eb0d05142c2801d8b59ba0930fdd6d', '1bff8414df0a6c737bcd580c539db6c5');
  }

  async sendSMS(phoneNumber: string, message: string) {
    try {
      // Use the Twilio client to send the SMS
      await this.twilioClient.messages.create({
        to: phoneNumber,
        from: '+12513091483',
        body: message,
      });
    } catch (error) {
      // Handle any errors that occur during SMS sending
      console.error('Error sending SMS:', error.message);
      throw new Error('Failed to send SMS');
    }
  }
}
