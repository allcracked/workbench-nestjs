import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Organization } from './models/organization.model';

const organizations: Organization[] = [
  {
    id: 1,
    name: 'Organization 1',
  },
  {
    id: 2,
    name: 'Organization 2',
  },
  {
    id: 3,
    name: 'Organization 3',
  },
];

@Injectable()
export class OrganizationService {
  constructor() {}

  async findOneById(id: number): Promise<Organization> {
    try {
      const foundOrganization = organizations.find(
        (organization) => organization.id === id,
      );

      if (!foundOrganization) {
        throw new HttpException('Organization not found', HttpStatus.NOT_FOUND);
      }

      return Promise.resolve(foundOrganization);
    } catch (error) {
      console.error(error);
      throw new HttpException(
        'Unable to find organization',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findAll(): Promise<Organization[]> {
    try {
      return Promise.resolve(organizations);
    } catch (error) {
      console.error(error);
      throw new HttpException(
        'Unable to find organizations',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
