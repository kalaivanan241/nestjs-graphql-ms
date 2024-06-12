import { ObjectType, Field, Int, ID } from '@nestjs/graphql';

@ObjectType()
export class Inventory {
  @Field(() => ID)
  id: string;

  @Field()
  title: string;

  @Field()
  description: string;

  @Field(() => Int)
  quantity: number;
}
