import { Module, MiddlewareConsumer } from "@nestjs/common";
import { UserController } from "./user.controller";
import { logger } from "../middleware/logger.middleware"

@Module({
    controllers: [UserController]
})
export class UsersModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(logger).forRoutes(UserController);
    }
}