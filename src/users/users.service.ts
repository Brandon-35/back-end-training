import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Users } from './entities/users.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_RESPOSITORY')
    private userRespository: Repository<Users>,
  ) { }
  async create(createUserDto: CreateUserDto) {
    const user = this.userRespository.create(createUserDto);
    await user.save();
    return user;
  }

  findAll() {
    return this.userRespository.find();
  }

  findOne(id: string) {
    return this.userRespository.findOne({ where: { id } });
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.userRespository.update(id,updateUserDto);
  }

  remove(id: string) {
    return this.userRespository.delete(id);
  }
}
