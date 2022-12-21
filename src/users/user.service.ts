import { UserDto } from "./user.dto";

export class UserService {
    

    createUser(user : UserDto): UserDto{
        user.id = 123;
        user.createdAt = new Date();
        user.updatedAt = new Date();
        let res = UserDto.plainToClass(user);
        return res
    }
}