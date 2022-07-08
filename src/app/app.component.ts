import { Component } from '@angular/core';
import { Product } from './product';
import { ProductService } from './product.service';
import {NgForm} from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  public products: Product[];

  constructor (private productService: ProductService){}

    ngOnInit (){
      this.getProduct();
    }

    public getProduct (): void {
      this.productService.getProducts().subscribe(
      (response: Product[]) => {
        this.products = response;
        console.log(this.products)
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
      );
    }

    public onOpenModal(product: Product, mode: string): void{
      const container =document.getElementById('main-container');
      const button = document.createElement('button');
      button.type= 'button';
      button.style.display='none';
      button.setAttribute('data-toggle','modal');
      if(mode === 'add'){
        button.setAttribute('data-toggle','addProductmodal');
      }
      if(mode === 'update'){
        button.setAttribute('data-toggle','updateProductmodal');
      }
      if(mode === 'delete'){
        button.setAttribute('data-toggle','deleteProductmodal');
      }
      container.appendChild(button);
      button.click();
    }

}
