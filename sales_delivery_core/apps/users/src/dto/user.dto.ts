import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

@InputType()
export class RegisterDto {
  @Field()
  @IsNotEmpty({ message: 'Нэр хоосон байна.' })
  @IsString({ message: 'Нэр нь нэг мөр байх ёстой.' })
  name: string;

  @Field()
  @IsNotEmpty({ message: 'Нууц үг шаардлагатай.' })
  @MinLength(8, { message: 'Нууц үг хамгийн багадаа 8 тэмдэгттэй байх ёстой.' })
  password: string;

  @Field()
  @IsNotEmpty({ message: 'Имэйл шаардлагатай.' })
  @IsEmail({}, { message: 'Имэйл буруу байна.' })
  email: string;

  @Field()
  @IsNotEmpty({ message: 'Утасны дугаар шаардлагатай.' })
  phone_number: number;
}

@InputType()
export class ActivationDto {
  @Field()
  @IsNotEmpty({ message: 'Идэвхжүүлэх токен шаардлагатай.' })
  activationToken: string;

  @Field()
  @IsNotEmpty({ message: 'Идэвхжүүлэх код шаардлагатай.' })
  activationCode: string;
}

@InputType()
export class LoginDto {
  @Field()
  @IsNotEmpty({ message: 'Имэйл хэрэгтэй.' })
  @IsEmail({}, { message: 'Имэйл хүчинтэй байх ёстой.' })
  email: string;

  @Field()
  @IsNotEmpty({ message: 'Нууц үг шаардлагатай.' })
  password: string;
}

@InputType()
export class ForgotPasswordDto {
  @Field()
  @IsNotEmpty({ message: 'Имэйл шаардлагатай.' })
  @IsEmail({}, { message: 'Имэйл хүчинтэй байх ёстой.' })
  email: string;
}

@InputType()
export class ResetPasswordDto {
  @Field()
  @IsNotEmpty({ message: 'Нууц үг шаардлагатай.' })
  @MinLength(8, { message: 'Нууц үг хамгийн багадаа 8 тэмдэгттэй байх ёстой.' })
  password: string;

  @Field()
  @IsNotEmpty({ message: 'Идэвхжүүлэх токен шаардлагатай.' })
  activationToken: string;
}
