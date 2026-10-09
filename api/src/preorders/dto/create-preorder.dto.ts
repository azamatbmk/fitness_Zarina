import {
  IsEmail,
  IsIn,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { IsPhoneNumber } from '../validators/is-phone-number.js';

export class CreatePreorderDto {
  @IsString()
  @MinLength(2)
  @MaxLength(80)
  name!: string;

  @IsString()
  @MaxLength(32)
  @IsPhoneNumber()
  phone!: string;

  @IsEmail()
  email!: string;

  @IsIn(['solo', 'support'])
  tariffId!: 'solo' | 'support';

  @IsOptional()
  @IsString()
  @MaxLength(500)
  comment?: string;
}
