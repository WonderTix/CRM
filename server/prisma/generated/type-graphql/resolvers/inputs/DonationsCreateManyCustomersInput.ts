import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { freq } from "../../enums/freq";

@TypeGraphQL.InputType("DonationsCreateManyCustomersInput", {
  isAbstract: true
})
export class DonationsCreateManyCustomersInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isanonymous?: boolean | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  amount?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dononame?: string | undefined;

  @TypeGraphQL.Field(_type => freq, {
    nullable: true
  })
  frequency?: "one_time" | "weekly" | "monthly" | "yearly" | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  comments?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  donodate?: Date | undefined;
}
