import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Event_instancesCreateNestedManyWithoutEventsInput } from "../inputs/Event_instancesCreateNestedManyWithoutEventsInput";

@TypeGraphQL.InputType("EventsCreateWithoutSeasonsInput", {
  isAbstract: true
})
export class EventsCreateWithoutSeasonsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  eventname!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  eventdescription?: string | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  active?: boolean | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  image_url?: string | undefined;

  @TypeGraphQL.Field(_type => Event_instancesCreateNestedManyWithoutEventsInput, {
    nullable: true
  })
  event_instances?: Event_instancesCreateNestedManyWithoutEventsInput | undefined;
}
