import { ObjectType, Field, ID, Int } from '@nestjs/graphql';

@ObjectType()
export class Ticket {
  @Field(() => ID)
  id: string;

  @Field()
  title: string;

  @Field()
  description: string;

  @Field()
  status: string;

  @Field(() => Int)
  priorty: number;
}
