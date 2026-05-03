import { Injectable } from '@nestjs/common';
import { hash } from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';
import { IUser } from './interface/user.interface';

@Injectable()
export class UserService {
  private readonly users: IUser[] = [];

  async createUser(createUserDto: CreateUserDto) {
    const saltOrRounds = 10;
    const hashedPassword = await hash(createUserDto.password, saltOrRounds);
    console.log('Has', hashedPassword);

    const newUser: IUser = {
      ...createUserDto,
      password: hashedPassword,
      id: this.users.length + 1,
    };

    this.users.push(newUser);

    return newUser;
  }

  async findAll(): Promise<IUser[]> {
    return this.users;
  }
}
