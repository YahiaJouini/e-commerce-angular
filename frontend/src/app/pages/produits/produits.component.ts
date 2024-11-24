import { Component, OnInit } from "@angular/core"
import { ProductComponent } from "../../components/product/product.component"
import { CategoryService } from "../../services/category.service"
import { NgClass, NgFor } from "@angular/common"
import { Category } from "../../model/category"

@Component({
   selector: "app-produits",
   standalone: true,
   imports: [ProductComponent, NgFor, NgClass],
   templateUrl: "./produits.component.html",
})
export class ProduitsComponent implements OnInit {
   categories: Category[] = []
   constructor(private categoryService: CategoryService) {}

   ngOnInit(): void {
      this.categories = this.categoryService.getCategories().slice(0, -1)
   }

   selectCategory(category: Category): void {
      this.categoryService.setCurrentCategory(category)
   }

   getCurrentCategory(): Category {
      return this.categoryService.getCurrentCategory()
   }
}
