import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateOneUser {
  @Field()
  name: string;
  @Field()
  email: string;
}
