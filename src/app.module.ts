import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { CreateOneUserArgs } from './graphql/args/create-one-user.args';
import { CreateOneUser } from './graphql/inputs/create-one-user.input';
import { UserObject } from './graphql/objects/user.object';
import { UserResolver } from './graphql/resolver/user.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
  ],
  controllers: [],
  providers: [UserResolver],
})
export class AppModule {}
