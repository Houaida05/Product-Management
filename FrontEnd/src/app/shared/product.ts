import {Category} from "./category";
import {Photo} from "./photo";

export class Product {
  id?: number;
  title?: string;
  description?: string;
  photos: Photo[]= [];
  category: Category = new Category();
  }
