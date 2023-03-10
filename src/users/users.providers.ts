import { DataSource } from 'typeorm';
import { Users } from './entities/users.entity';

export const userProviders = [
  {
    provide: 'USER_RESPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Users),
    inject: ['DATA_SOURCE'],
  },
];