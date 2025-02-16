import { Module } from '@nestjs/common';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { UserResolver } from './user/user.resolver';
import { OrganizationResolver } from './organization/organization.resolver';
import { OrganizationService } from './organization/organization.service';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { OrganizationModule } from './organization/organization.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      playground: false,
      introspection: true,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
    UserModule,
    OrganizationModule,
  ],
  providers: [
    UserResolver,
    OrganizationResolver,
    OrganizationService,
    UserService,
    UserModule,
    OrganizationModule,
  ],
})
export class AppModule {}
