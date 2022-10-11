import InvalidUuidError from "@seedwork/errors/invalid-uuid.error";
import { v4 as uuidV4, validate as uuidValidate } from "uuid";

export default class UniqueEntityId {
  constructor(public readonly id?: string) {
    this.id = this.id || uuidV4();
  }

  private validate() {
    const isValid = uuidValidate(this.id);
    if (!isValid) {
      throw new InvalidUuidError();
    }
  }
}
