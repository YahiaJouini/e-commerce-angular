import { Component, OnInit } from "@angular/core"
import { RouterLink, RouterLinkActive } from "@angular/router"
import { CommonModule } from "@angular/common"
import { AuthService } from "../../services/auth.service"

@Component({
   selector: "app-navbar",
   standalone: true,
   imports: [RouterLink, RouterLinkActive, CommonModule],
   templateUrl: "./navbar.component.html",
})
export class NavbarComponent implements OnInit {
   isAuthenticated = false
   userName = ""

   constructor(private authService: AuthService) {}

   ngOnInit() {
      this.authService.isAuthenticated$.subscribe((isAuth) => {
         this.isAuthenticated = isAuth
         if (isAuth) {
            const user = this.authService.getCurrentUser()
            this.userName = user ? user.name || user.email : ""
         }
      })
   }

   search(e: Event) {
      const inputElement = e.target as HTMLInputElement
      console.log(inputElement.value)
   }

   logout() {
      this.authService.logout()
   }
}
