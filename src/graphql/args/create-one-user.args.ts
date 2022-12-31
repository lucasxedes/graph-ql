import { ArgsType, Field } from '@nestjs/graphql';
import { CreateOneUser } from '../inputs/create-one-user.input';

@ArgsType()
export class CreateOneUserArgs {
  @Field()
  data: CreateOneUser;
}
