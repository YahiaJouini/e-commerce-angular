import { Component, Input, OnInit } from "@angular/core"
import { ProductsService } from "../../services/products.service"
import { Product } from "../../model/product"
import { NgForOf, NgIf } from "@angular/common"
import { RouterLink } from "@angular/router"

@Component({
   selector: "app-product",
   standalone: true,
   imports: [NgForOf, NgIf, RouterLink],
   templateUrl: "./product.component.html",
})
export class ProductComponent implements OnInit {
   private productService: ProductsService
   @Input() limit?: number
   productList: Product[] = []
   constructor(productService: ProductsService) {
      this.productService = productService
   }

   ngOnInit(): void {
      this.productService.fetchProducts().subscribe((products) => {
         // get the first 3 products
         this.productList = this.limit
            ? products.slice(0, this.limit)
            : products
      })
   }
}
