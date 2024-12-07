import { CommonModule } from "@angular/common"
import { Component } from "@angular/core"
import {
   FormBuilder,
   FormGroup,
   ReactiveFormsModule,
   Validators,
} from "@angular/forms"
import { Router } from "@angular/router"
import { AuthService } from "../../services/auth.service"

@Component({
   selector: "app-form",
   standalone: true,
   imports: [CommonModule, ReactiveFormsModule],
   templateUrl: "./form.component.html",
})
export class FormComponent {
   registrationForm: FormGroup
   errorMessage = ""

   constructor(
      private fb: FormBuilder,
      private authService: AuthService,
      private router: Router
   ) {
      this.registrationForm = this.fb.group({
         email: ["", [Validators.required, Validators.email]],
         password: ["", [Validators.required, Validators.minLength(6)]],
      })
   }

   onSubmit() {
      if (this.registrationForm.invalid) {
         this.errorMessage = "Veuillez remplir correctement tous les champs."
         return
      }

      const { firstName, lastName, email, password } =
         this.registrationForm.value

      this.authService
         .addUser({
            name: `${firstName} ${lastName}`,
            email: email,
            password: password,
         })
         .subscribe({
            next: (response) => {
               console.log("Inscription réussie:", response)
               this.router.navigate(["/login"])
            },
            error: (error) => {
               console.error("Erreur lors de l'inscription:", error)
               this.errorMessage =
                  error.error?.message ||
                  "Échec de l'inscription. Veuillez réessayer."
            },
         })
   }
}
