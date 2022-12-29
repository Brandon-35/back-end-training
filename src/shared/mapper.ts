import { Users } from '../users/entities/users.entity'
import { UserDto } from '../users/dto/user.dto'
import * as bcrypt from 'bcrypt'
export const toUserDto = (data: Users): UserDto => {
    const { id, username } = data;
    let userDto: UserDto = { id, username };
    return userDto;
};


export async function comparePasswords(plainTextPassword, hashedPassword) {
    console.log(await bcrypt.compare(plainTextPassword, hashedPassword));
    return await bcrypt.compare(plainTextPassword, hashedPassword);
}