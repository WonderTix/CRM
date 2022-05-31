import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsersCreateWithoutTask_task_report_toTousersInput } from "../inputs/UsersCreateWithoutTask_task_report_toTousersInput";
import { UsersWhereUniqueInput } from "../inputs/UsersWhereUniqueInput";

@TypeGraphQL.InputType("UsersCreateOrConnectWithoutTask_task_report_toTousersInput", {
  isAbstract: true
})
export class UsersCreateOrConnectWithoutTask_task_report_toTousersInput {
  @TypeGraphQL.Field(_type => UsersWhereUniqueInput, {
    nullable: false
  })
  where!: UsersWhereUniqueInput;

  @TypeGraphQL.Field(_type => UsersCreateWithoutTask_task_report_toTousersInput, {
    nullable: false
  })
  create!: UsersCreateWithoutTask_task_report_toTousersInput;
}
