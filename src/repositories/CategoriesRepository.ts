import { Category } from "../model/Category";
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from "./ICategoriesRepository";

class CategoriesRepository implements ICategoriesRepository {
  // Array that will hold our categories
  private categories: Category[];

  constructor() {
    this.categories = [];
  }

  create({ description, name }: ICreateCategoryDTO): void {
    const category = new Category();

    /**
     * Assign atributes to an object that was created early.
     * This way we dont need to manually assign values to objects,
     * like category.name = name.
     */
    Object.assign(category, {
      name,
      description,
      created_at: new Date(),
    });

    this.categories.push(category);
  }

  list(): Category[] {
    return this.categories;
  }

  findByName(name: string): Category {
    const category = this.categories.find((category) => category.name === name);
    return category;
  }
}

export { CategoriesRepository };
