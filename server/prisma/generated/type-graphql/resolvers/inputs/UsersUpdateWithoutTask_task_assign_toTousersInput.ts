import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NullableBoolFieldUpdateOperationsInput } from "../inputs/NullableBoolFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { TaskUpdateManyWithoutUsers_task_report_toTousersInput } from "../inputs/TaskUpdateManyWithoutUsers_task_report_toTousersInput";

@TypeGraphQL.InputType("UsersUpdateWithoutTask_task_assign_toTousersInput", {
  isAbstract: true
})
export class UsersUpdateWithoutTask_task_assign_toTousersInput {
  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  username?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  pass_hash?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableBoolFieldUpdateOperationsInput, {
    nullable: true
  })
  is_superadmin?: NullableBoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => TaskUpdateManyWithoutUsers_task_report_toTousersInput, {
    nullable: true
  })
  task_task_report_toTousers?: TaskUpdateManyWithoutUsers_task_report_toTousersInput | undefined;
}
