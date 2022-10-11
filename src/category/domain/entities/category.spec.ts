import { Category } from "./category";
import { omit } from "lodash";
import UniqueEntityId from "../../../@seedwork/domain/unique-entity-id-vo";
describe("Category Test", () => {
  test("construct of category", () => {
    //Act
    let category = new Category({ name: "Movie" });
    let props = omit(category.props, "created_at");

    //Assert
    expect(props).toStrictEqual({
      name: "Movie",
      description: null,
      is_active: true,
    });

    category = new Category({
      name: "Movie",
      description: "some description",
      is_active: false,
    });
    expect(category.props).toMatchObject({
      name: "Movie",
      description: "some description",
    });

    category = new Category({
      name: "Movie",
      description: "some description",
      is_active: false,
    });
    expect(category.props).toMatchObject({
      name: "Movie",
      is_active: false,
    });

    expect(category.props.created_at).toBeInstanceOf(Date);
  });

  test("if id field", () => {
    let category = new Category({ name: "Movie" });
    expect(category.id).not.toBeNull();
    expect(category.id).toBeInstanceOf(UniqueEntityId)

  });

});
