import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_RESPOSITORY')
    private userRespository: Repository<User>,
  ) { }
  create(createUserDto: CreateUserDto) {
    return this.userRespository.save(createUserDto);
  }

  findAll() {
    return this.userRespository.find();
  }

  findOne(id: number) {
    return this.userRespository.findOne({ where: { id } });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userRespository.update(id,updateUserDto);
  }

  remove(id: number) {
    return this.userRespository.delete(id);
  }
}
