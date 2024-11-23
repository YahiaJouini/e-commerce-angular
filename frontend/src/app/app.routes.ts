import { Routes } from "@angular/router"
import { AboutComponent } from "./pages/about/about.component"
import { HomeComponent } from "./pages/home/home.component"
import { ProductComponent } from "./components/product/product.component"

export const routes: Routes = [
   {
      path: "",
      component: HomeComponent,
      pathMatch: "full",
   },
   {
      path: "apropos",
      component: AboutComponent,
   },

   {
      path: "produits",
      component: ProductComponent,
   },
]
