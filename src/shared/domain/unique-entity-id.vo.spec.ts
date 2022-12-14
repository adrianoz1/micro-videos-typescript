import UniqueEntityId from "./unique-entity-id-vo";
import InvalidUuidError from "../errors/invalid-uuid.error";
import { v4 as uuidV4, validate as uuidValidate } from "uuid";

const spyValidateMethod = () => {
  return jest.spyOn(UniqueEntityId.prototype as any, "validate");
};

describe("UniqueEntityId Unit Tests", () => {
  it("should throw error when uuid is invalid", () => {
    const validateSpy = spyValidateMethod();
    expect(() => new UniqueEntityId("fake id")).toThrow(new InvalidUuidError());
    expect(validateSpy).toHaveBeenCalled();
  });

  it("should accept a uuid passed in construct with id", () => {
    const validateSpy = spyValidateMethod();
    const uuid = uuidV4();
    const vo = new UniqueEntityId(uuid);
    expect(vo.id).toBe(uuid);
    expect(validateSpy).toHaveBeenCalled();
  });

  it("should accept a uuid passed in construct without id is empty", () => {
    const validateSpy = spyValidateMethod();
    const uuid = uuidV4();
    const vo = new UniqueEntityId();
    expect(uuidValidate(vo.id)).toBeTruthy();
    expect(validateSpy).toHaveBeenCalled();
  });
});
