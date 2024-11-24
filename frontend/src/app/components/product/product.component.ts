import { NgForOf, NgIf } from "@angular/common"
import { Component, Input, OnInit, SimpleChanges } from "@angular/core"
import { RouterLink } from "@angular/router"
import { Subscription } from "rxjs"
import { Category } from "../../model/category"
import { Product } from "../../model/product"
import { CategoryService } from "../../services/category.service"
import { ProductsService } from "../../services/products.service"

@Component({
   selector: "app-product",
   standalone: true,
   imports: [NgForOf, NgIf, RouterLink],
   templateUrl: "./product.component.html",
})
export class ProductComponent implements OnInit {
   private productService: ProductsService
   private categoryService: CategoryService
   @Input() limit?: number
   @Input() currentCategory?: Category
   productList: Product[] = []
   constructor(
      productService: ProductsService,
      categoryService: CategoryService
   ) {
      this.productService = productService
      this.categoryService = categoryService
   }

   ngOnInit(): void {
      this.loadProducts()
   }

   ngOnChanges(changes: SimpleChanges): void {
      if (
         changes["currentCategory"] &&
         !changes["currentCategory"].firstChange
      ) {
         this.loadProducts()
      }
   }

   private loadProducts(): void {
      const category =
         this.currentCategory || this.categoryService.getCurrentCategory()
      this.productService.fetchProducts().subscribe((products) => {
         let filteredProducts: Product[]

         if (category === "random" || category === "all") {
            filteredProducts = this.shuffleArray(products)
         } else {
            filteredProducts = products.filter(
               (product) => product.category === category
            )
         }

         this.productList = this.limit
            ? filteredProducts.slice(0, this.limit)
            : filteredProducts
      })
   }

   private shuffleArray(array: Product[]): Product[] {
      return array
         .map((value) => ({ value, sort: Math.random() }))
         .sort((a, b) => a.sort - b.sort)
         .map(({ value }) => value)
   }
}
