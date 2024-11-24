import { Injectable } from "@angular/core"
import { Category } from "../model/category"

@Injectable({
   providedIn: "root",
})
export class CategoryService {
   private currentCategory: Category = "all"
   private categories: Category[] = [
      "all",
      "tech",
      "clothing",
      "jewelry",
      "furniture",
      "random",
   ]
   getCurrentCategory(): Category {
      return this.currentCategory
   }

   getCategories(): Category[] {
      return this.categories
   }

   setCurrentCategory(category: Category): void {
      this.currentCategory = category
   }
}
