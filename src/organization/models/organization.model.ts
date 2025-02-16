import { Field, Int, ObjectType } from '@nestjs/graphql';
import { User } from 'src/user/models/user.model';

@ObjectType()
export class Organization {
  @Field((type) => Int)
  id: number;

  name: string;
  email: string;

  @Field((type) => [User])
  users: User[];
}
