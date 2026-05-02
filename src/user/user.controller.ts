import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {
  @Get()
  async findAll() {
    const users = JSON.stringify({ teste: 'user 1' });

    return users;
  }

  @Post()
  async create(@Body() createUser: CreateUserDto) {
    return createUser;
  }
}
