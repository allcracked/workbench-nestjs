import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { User } from './models/user.model';

const users: User[] = [
  {
    id: 1,
    name: 'John Doe',
    email: '',
    organizationId: 1,
  },
  {
    id: 2,
    name: 'Jane Doe',
    email: '',
    organizationId: 2,
  },
  {
    id: 3,
    name: 'Alice',
    email: '',
    organizationId: 1,
  },
  {
    id: 4,
    name: 'Bob',
    email: '',
    organizationId: 2,
  },
  {
    id: 5,
    name: 'Charlie',
    email: '',
    organizationId: 1,
  },
];

@Injectable()
export class UserService {
  constructor() {}

  async findOneById(id: number): Promise<User> {
    try {
      const foundUser = users.find((user) => user.id === id);

      if (!foundUser) {
        throw new HttpException('User not found', HttpStatus.NOT_FOUND);
      }

      return Promise.resolve(foundUser);
    } catch (error) {
      console.error(error);
      throw new HttpException(
        'Unable to find user',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findAll() {
    try {
      return Promise.resolve(users);
    } catch (error) {
      console.error(error);
    }
  }

  async findByOrganizationId(organizationId: number) {
    try {
      return Promise.resolve(
        users.filter((user) => user.organizationId === organizationId),
      );
    } catch (error) {
      console.error(error);
    }
  }
}
