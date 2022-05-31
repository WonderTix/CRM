import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DonationsUpdateManyWithoutCustomersInput } from "../inputs/DonationsUpdateManyWithoutCustomersInput";
import { NullableBoolFieldUpdateOperationsInput } from "../inputs/NullableBoolFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TaskUpdateManyWithoutCustomersInput } from "../inputs/TaskUpdateManyWithoutCustomersInput";
import { TicketsUpdateManyWithoutCustomersInput } from "../inputs/TicketsUpdateManyWithoutCustomersInput";

@TypeGraphQL.InputType("CustomersUpdateWithoutReservationInput", {
  isAbstract: true
})
export class CustomersUpdateWithoutReservationInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  custname?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  email?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  phone?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  custaddress?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableBoolFieldUpdateOperationsInput, {
    nullable: true
  })
  newsletter?: NullableBoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  donorbadge?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableBoolFieldUpdateOperationsInput, {
    nullable: true
  })
  seatingaccom?: NullableBoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableBoolFieldUpdateOperationsInput, {
    nullable: true
  })
  vip?: NullableBoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  volunteer_list?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DonationsUpdateManyWithoutCustomersInput, {
    nullable: true
  })
  donations?: DonationsUpdateManyWithoutCustomersInput | undefined;

  @TypeGraphQL.Field(_type => TaskUpdateManyWithoutCustomersInput, {
    nullable: true
  })
  task?: TaskUpdateManyWithoutCustomersInput | undefined;

  @TypeGraphQL.Field(_type => TicketsUpdateManyWithoutCustomersInput, {
    nullable: true
  })
  tickets?: TicketsUpdateManyWithoutCustomersInput | undefined;
}
