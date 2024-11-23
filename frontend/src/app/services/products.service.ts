import { Injectable } from "@angular/core"

export type Products = {
   id: number
   name: string
   price: number
   description: string
   image: string
}

@Injectable({
   providedIn: "root",
})
export class ProductsService {
   products: Products[] = []
   constructor() {
    
   }
}
