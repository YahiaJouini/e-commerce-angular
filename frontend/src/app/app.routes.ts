import { Routes } from "@angular/router"
import { ContactComponent } from "./pages/contact/contact.component"
import { AboutComponent } from "./pages/about/about.component"
import { FormComponent } from "./pages/form/form.component"
import { HomeComponent } from "./pages/home/home.component"
import { LoginComponent } from "./pages/login/login.component"
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
   {
      path: "register",
      component: FormComponent,
   },
   {
      path: "login",
      component: LoginComponent,
   },
   {
      path: "contact",
      component: ContactComponent,
   },
]
