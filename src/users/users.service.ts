import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Users } from './entities/users.entity';
import { UpdateStatusDto } from './dto/update-status.dto'

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_RESPOSITORY')
    private userRespository: Repository<Users>,
  ) { }
  async create(createUserDto: CreateUserDto) {
    const user = this.userRespository.create(createUserDto);
    try {
      await user.save();
      return {
        success: true,
        message: 'Successfully updated status',
        data : user
      };
    } catch (err) {
      return {
        success: false,
        message: 'Failed create user',
      };
    }
    
  }

  findAll() {
    return this.userRespository.find();
  }

  findOne(id: string) {
    return this.userRespository.findOne({ where: { id } });
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.userRespository.update(id, updateUserDto);
  }

  remove(id: string) {
    return this.userRespository.delete(id);
  }

  async updateStatus(updateStatus: UpdateStatusDto) {
    try {
      console.log(updateStatus);
      await this.userRespository.update(updateStatus.id, updateStatus); 
      return {
        success: true,
        message: 'Successfully updated status',
      };
    } catch (err) {
      return {
        success: false,
        message: 'Failed update st status',
      };
    }
  }
}
