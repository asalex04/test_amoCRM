import { ApiProperty } from '@nestjs/swagger'
import {IsEmail, IsNotEmpty, IsPhoneNumber} from 'class-validator'
import { ERROR_MESSAGES } from '../../constants'

export class CreateContactDto {
  @ApiProperty()
  @IsNotEmpty({message: ERROR_MESSAGES.NOT_EMPTY})
  readonly first_name: string

  @ApiProperty()
  readonly last_name: string

  @ApiProperty()
  @IsNotEmpty({ message: ERROR_MESSAGES.EMAIL_REQUIRED })
  @IsEmail({}, { message: ERROR_MESSAGES.INVALID_EMAIL_FORMAT })
  readonly email: string

  @ApiProperty()
  @IsNotEmpty({message: ERROR_MESSAGES.NOT_EMPTY})
  @IsPhoneNumber("RU", {message: ERROR_MESSAGES.INVALID_PHONE_FORMAT})
  readonly phone: string
}
