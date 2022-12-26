import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

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
} 
