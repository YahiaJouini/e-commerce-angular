import { Component } from '@angular/core';
import { ProductComponent } from "../../components/product/product.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './home.component.html'
})
export class HomeComponent {

}
