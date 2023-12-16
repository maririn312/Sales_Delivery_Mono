import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { RegisterDto, LoginDto } from './dto/user.dto';

@Injectable()
export class UsersService {
  constructor(
    private readonly jwtService: JwtService,

    // private readonly configService configService,
  ) {}

  // Register Logic
  async register(registerDto: RegisterDto) {
    const { name, email, password } = registerDto;

    const user = {
      name,
      email,
      password,
    };
    return user;
  }

  // Login Logic
  async login(loginDto: LoginDto) {
    const { email, password } = loginDto;

    const user = {
      email,
      password,
    };
    return user;
  }

  // get all users service
  async getUsers() {
    const users = [
      {
        id: '1234',
        name: 'test',
        email: 'test@test.mn',
        password: '12345678',
      },
    ];
    return users;
  }

  //getHello(): string {
  //  return 'Hello World!';
  //}
}
