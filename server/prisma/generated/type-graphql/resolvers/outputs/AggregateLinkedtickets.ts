import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LinkedticketsAvgAggregate } from "../outputs/LinkedticketsAvgAggregate";
import { LinkedticketsCountAggregate } from "../outputs/LinkedticketsCountAggregate";
import { LinkedticketsMaxAggregate } from "../outputs/LinkedticketsMaxAggregate";
import { LinkedticketsMinAggregate } from "../outputs/LinkedticketsMinAggregate";
import { LinkedticketsSumAggregate } from "../outputs/LinkedticketsSumAggregate";

@TypeGraphQL.ObjectType("AggregateLinkedtickets", {
  isAbstract: true
})
export class AggregateLinkedtickets {
  @TypeGraphQL.Field(_type => LinkedticketsCountAggregate, {
    nullable: true
  })
  _count!: LinkedticketsCountAggregate | null;

  @TypeGraphQL.Field(_type => LinkedticketsAvgAggregate, {
    nullable: true
  })
  _avg!: LinkedticketsAvgAggregate | null;

  @TypeGraphQL.Field(_type => LinkedticketsSumAggregate, {
    nullable: true
  })
  _sum!: LinkedticketsSumAggregate | null;

  @TypeGraphQL.Field(_type => LinkedticketsMinAggregate, {
    nullable: true
  })
  _min!: LinkedticketsMinAggregate | null;

  @TypeGraphQL.Field(_type => LinkedticketsMaxAggregate, {
    nullable: true
  })
  _max!: LinkedticketsMaxAggregate | null;
}
