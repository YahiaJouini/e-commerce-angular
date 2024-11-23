import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { Product } from "../model/product"

@Injectable({
   providedIn: "root",
})
export class ProductsService {
   private http: HttpClient
   constructor(http: HttpClient) {
      this.http = http
   }

   fetchProducts(): Observable<Product[]> {
      return this.http.get<Product[]>("http://localhost:3000/products")
   }
}
