import { DataSource } from 'typeorm';
import { Users } from '../users/entities/users.entity';

export const authProviders = [
  {
    provide: 'AUTH_RESPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Users),
    inject: ['DATA_SOURCE'],
  },
];