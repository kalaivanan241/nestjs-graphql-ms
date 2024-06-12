import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateInventoryInput {
  @Field()
  id: string;

  @Field()
  title: string;

  @Field()
  description: string;

  @Field(() => Int)
  quantity: number;
}
