import { Category } from "./category"

describe("Category Test", () => {
  test("construct of category", () => {
    const category = new Category('Movie')
    expect(category.name).toBe('Movie')
  })
})
