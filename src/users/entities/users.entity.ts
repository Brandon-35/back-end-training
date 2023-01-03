import { BaseEntity, BeforeInsert, Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";
import * as bcrypt from 'bcrypt';
@Entity({name : "users"})
@Unique(['username'])
export class Users  extends BaseEntity{
    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @Column({ length: 100 })
    username: string;

    @Column({ length: 100 })
    fullname: string;

    @Column({ length: 100 })
    address: string;

    @Column({ length: 100 })
    avatar: string;

    @Column({ length: 100 })
    salary: string;

    @Column({ length: 100 })
    reason: string;

    @Column({ length: 100 })
    birthday: string;

    @Column({ length: 100 })
    describe_yourself: string;

    @Column({ length: 100 })
    position: string;

    @Column({ length: 100 })
    password: string;

    @Column()
    status: number;

    @BeforeInsert()
    async hashPassword() {
        const saltOrRounds = 10;
        this.password = await bcrypt.hash(this.password, saltOrRounds);
    }
} 
