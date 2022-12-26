import { DataSource } from 'typeorm';
import { User } from '../users/entities/user.entity';

export const authProviders = [
  {
    provide: 'AUTH_RESPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(User),
    inject: ['DATA_SOURCE'],
  },
];