import { Component } from '@angular/core';
import ProductsJson from "./products.json";

interface PRODUCTS {
  Codigo: String,
  Nombre_Producto: String;
  Precio: String;
  Inventario: String;
  Imagen: String;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  Products: PRODUCTS[] = ProductsJson;
  constructor() {
    console.log(this.Products);
  }


}
