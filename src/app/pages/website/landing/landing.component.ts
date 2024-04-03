import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product/product.service';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule,RouterOutlet,RouterLink],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent implements OnInit{

  productList:any=[]
  categoryList:any=[]
  cartList:any=[]

  constructor(private prodSrv:ProductService,private router:Router){
    this.prodSrv.cartUpdated?.subscribe((res:any)=>{
      this.getCartByCustomer()
    })
  }

  ngOnInit(): void {
    this.getAllProducts()
    this.getAllCategory()
    this.getCartByCustomer()
  }

  getCartByCustomer(){
    this.prodSrv.getCartDataByCustID(400).subscribe((res:any)=>{
      this.cartList=res.data
    })
  }
  getAllProducts(){
    this.prodSrv.getProducts().subscribe((res:any)=>{
      this.productList=res.data
    })
  }

  getAllCategory(){
    this.prodSrv.getCategory().subscribe((res:any)=>{
      this.categoryList=res.data
    })
  }

  navigateToProducts(id:number){
    
    console.log(this.router.navigate(['/products',id]))
    this.router.navigate(['/products',id])
    // console.log(this.router.navigate(['/products',id]))
  }

  remove(cartId:number){
    this.prodSrv.removeProductByCartID(cartId).subscribe((res:any)=>{
      this.getCartByCustomer()
  })
}
}
