import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateOneUserArgs } from '../args/create-one-user.args';
import { UserObject } from '../objects/user.object';

@Resolver()
export class UserResolver {
  @Query(() => String)
  users() {
    return 'Hello World';
  }

  @Mutation(() => UserObject)
  createOnUser(@Args() args: CreateOneUserArgs) {
    console.log(args);
    return args.data;
  }
}
