import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field((type) => Int)
  id: number;

  name: string;
  email: string;

  @Field((type) => Int)
  organizationId: number;
}
