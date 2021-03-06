import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DonationsCreateNestedManyWithoutCustomersInput } from "../inputs/DonationsCreateNestedManyWithoutCustomersInput";
import { ReservationCreateNestedManyWithoutCustomersInput } from "../inputs/ReservationCreateNestedManyWithoutCustomersInput";
import { TaskCreateNestedManyWithoutCustomersInput } from "../inputs/TaskCreateNestedManyWithoutCustomersInput";

@TypeGraphQL.InputType("CustomersCreateWithoutTicketsInput", {
  isAbstract: true
})
export class CustomersCreateWithoutTicketsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  custname!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  email?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  phone?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  custaddress?: string | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  newsletter?: boolean | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  donorbadge?: string | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  seatingaccom?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  vip?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  volunteer_list?: boolean | undefined;

  @TypeGraphQL.Field(_type => DonationsCreateNestedManyWithoutCustomersInput, {
    nullable: true
  })
  donations?: DonationsCreateNestedManyWithoutCustomersInput | undefined;

  @TypeGraphQL.Field(_type => ReservationCreateNestedManyWithoutCustomersInput, {
    nullable: true
  })
  reservation?: ReservationCreateNestedManyWithoutCustomersInput | undefined;

  @TypeGraphQL.Field(_type => TaskCreateNestedManyWithoutCustomersInput, {
    nullable: true
  })
  task?: TaskCreateNestedManyWithoutCustomersInput | undefined;
}
