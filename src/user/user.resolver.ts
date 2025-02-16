import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './models/user.model';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => User)
  async user(@Args('id', { type: () => Int }) id: number) {
    return this.userService.findOneById(id);
  }
}
