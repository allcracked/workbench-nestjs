import {
  Args,
  Int,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { OrganizationService } from './organization.service';
import { UserService } from '../user/user.service';
import { Organization } from './models/organization.model';
import { HttpException, HttpStatus } from '@nestjs/common';
import { User } from 'src/user/models/user.model';

@Resolver(() => Organization)
export class OrganizationResolver {
  constructor(
    private readonly organizationService: OrganizationService,
    private readonly userService: UserService,
  ) {}

  @Query(() => Organization, { name: 'organization' })
  async getOrganization(@Args('id', { type: () => Int }) id: number) {
    try {
      const foundOrganization = await this.organizationService.findOneById(id);

      return foundOrganization;
    } catch (error) {
      console.error(error);
      throw new HttpException(
        'Unable to find organization',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @ResolveField('users', () => [User])
  async users(@Parent() organization: Organization) {
    try {
      const users = await this.userService.findByOrganizationId(
        organization.id,
      );

      return users;
    } catch (error) {
      console.error(error);
      throw new HttpException(
        'Unable to find users',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
