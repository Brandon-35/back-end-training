import { Body, Controller, Get, Param, ParseIntPipe, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserDto } from "./user.dto"
import { UserService } from './user.service';
@Controller('users')
export class UserController {
    userService:UserService;
    constructor() { 
        this.userService = new UserService;
    }
    @Get()
    getAllUsers() {
        return {
            status: true,
            data: [
                {
                    name: "1",
                    id: 1
                },
                {
                    name: "3",
                    id: 3
                },
                {
                    name: "2",
                    id: 2
                }
            ]
        };
    }
    @Post()
    createUser(@Body() user: UserDto): UserDto {
        return this.userService.createUser(user);
    }

    @Get(':id')
    getUserById(@Param('id', ParseIntPipe) id: number) {
        console.log(id);
        return id;
    }
}