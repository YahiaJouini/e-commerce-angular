import { Injectable, Inject, PLATFORM_ID } from "@angular/core"
import { HttpClient } from "@angular/common/http"
import { BehaviorSubject, Observable } from "rxjs"
import { tap } from "rxjs/operators"
import { isPlatformBrowser } from "@angular/common"

@Injectable({
   providedIn: "root",
})
export class AuthService {
   private apiUrl = "http://localhost:3000"

   private isAuthenticatedSubject = new BehaviorSubject<boolean>(false)
   isAuthenticated$ = this.isAuthenticatedSubject.asObservable()

   constructor(
      private http: HttpClient,
      @Inject(PLATFORM_ID) private platformId: Object
   ) {
      this.checkInitialAuthState()
   }

   private checkInitialAuthState() {
      if (isPlatformBrowser(this.platformId)) {
         const user = localStorage.getItem("user")
         this.isAuthenticatedSubject.next(!!user)
      }
   }

   login(userData: { email: string; password: string }): Observable<any> {
      return this.http.post(this.apiUrl + "/login", userData).pipe(
         tap((response) => {
            this.setUser(response)
         })
      )
   }

   addUser(userData: { email: string; name: string; password: string }) {
      return this.http.post(this.apiUrl + "/create/user", userData)
   }

   private setUser(user: any) {
      if (isPlatformBrowser(this.platformId)) {
         localStorage.setItem("user", JSON.stringify(user))
         this.isAuthenticatedSubject.next(true)
      }
   }

   setIsAuthenticated(value: boolean) {
      this.isAuthenticatedSubject.next(value)
   }

   logout() {
      if (isPlatformBrowser(this.platformId)) {
         localStorage.removeItem("user")
         this.isAuthenticatedSubject.next(false)
      }
   }

   getCurrentUser() {
      if (isPlatformBrowser(this.platformId)) {
         const userString = localStorage.getItem("user")
         return userString ? JSON.parse(userString) : null
      }
      return null
   }
}
