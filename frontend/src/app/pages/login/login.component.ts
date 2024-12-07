import { Component } from "@angular/core"
import { AuthService } from "../../services/auth.service"
import { FormsModule } from "@angular/forms"
import { NgIf } from "@angular/common"
import { Router } from "@angular/router"

@Component({
   selector: "app-login",
   templateUrl: "./login.component.html",
   standalone: true,
   imports: [FormsModule, NgIf],
})
export class LoginComponent {
   email = ""
   password = ""
   errorMessage = ""

   constructor(private authService: AuthService, private router: Router) {}

   onLogin(): void {
      if (!this.email || !this.password) {
         this.errorMessage = "Veuillez remplir tous les champs."
         return
      }

      this.authService
         .login({
            email: this.email,
            password: this.password,
         })
         .subscribe({
            next: (response) => {
               console.log("Connexion réussie:", response)
               this.router.navigate(["/"])
            },
            error: (error) => {
               console.error("Erreur lors de la connexion:", error)
               this.errorMessage = "Échec de la connexion. Veuillez réessayer."
            },
         })
   }
}
