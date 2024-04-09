// sms.dto.ts

import { IsNotEmpty, IsString } from "class-validator";

export class SendSMSDto {
    @IsString()
    @IsNotEmpty()
    readonly phoneNumber: string;
    @IsString()
    @IsNotEmpty()
    readonly message: string;
  }
  