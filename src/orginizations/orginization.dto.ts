import { IsString, IsNotEmpty, IsBoolean, IsOptional, IsNumber } from 'class-validator';

export class OrgDto {
  @IsString()
  @IsNotEmpty()
  name: string;

//   @IsString()
//   @IsNotEmpty()
//   clientId: string;

//   @IsString()
//   @IsNotEmpty()
//   apiKey: string;

  @IsNumber()
  @IsOptional()
  Balance: number;

//   @IsString({ each: true })
//   @IsNotEmpty()
//   userId: string[];

  @IsBoolean()
  @IsNotEmpty()
  active: boolean;

  @IsString()
  @IsOptional()
  pictureUrl: string; 

  @IsString()
  @IsOptional()
  fileUrl: string; 
}
