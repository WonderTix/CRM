import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TicketsScalarWhereInput } from "../inputs/TicketsScalarWhereInput";
import { TicketsUpdateManyMutationInput } from "../inputs/TicketsUpdateManyMutationInput";

@TypeGraphQL.InputType("TicketsUpdateManyWithWhereWithoutEvent_instancesInput", {
  isAbstract: true
})
export class TicketsUpdateManyWithWhereWithoutEvent_instancesInput {
  @TypeGraphQL.Field(_type => TicketsScalarWhereInput, {
    nullable: false
  })
  where!: TicketsScalarWhereInput;

  @TypeGraphQL.Field(_type => TicketsUpdateManyMutationInput, {
    nullable: false
  })
  data!: TicketsUpdateManyMutationInput;
}
