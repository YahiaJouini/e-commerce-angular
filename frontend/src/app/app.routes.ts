import { Routes } from "@angular/router"

export const routes: Routes = [
   {
      path: "",
      async loadComponent() {
         return await import("./pages/home/home.component").then(
            (m) => m.HomeComponent
         )
      },
   },
   {
      path: "about",
      async loadComponent() {
         return await import("./pages/about/about.component").then(
            (m) => m.AboutComponent
         )
      },
   },
]
