import { Category } from "./category"

describe("Category Test", () => {
  test("construct of category", () => {
    //Arrange
    const props ={
      name: 'Movie',
      description: 'some description',
      is_active: true,
      created_at: new Date
    }

    //Act
    const category = new Category(props)

    //Assert
    expect(category.props).toStrictEqual(props)
  })
})
