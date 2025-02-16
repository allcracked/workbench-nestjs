import { Module } from '@nestjs/common';
import { OrganizationService } from './organization.service';
import { UserModule } from 'src/user/user.module';
import { OrganizationResolver } from './organization.resolver';

@Module({
  imports: [UserModule],
  providers: [OrganizationService, OrganizationResolver],
})
export class OrganizationModule {}
