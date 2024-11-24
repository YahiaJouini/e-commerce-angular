import { Routes } from "@angular/router"
import { AboutComponent } from "./pages/about/about.component"
import { HomeComponent } from "./pages/home/home.component"
import { ProductComponent } from "./components/product/product.component"
import { ProduitsComponent } from "./pages/produits/produits.component"

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
      component: ProduitsComponent,
   },
]
