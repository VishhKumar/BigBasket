import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../../services/product/product.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  providers:[ProductService]
})
export class ProductsComponent implements OnInit{
  
  isSidePanelVisible=false


  productObj:any={
    "productId": 0,
  "productSku": "",
  "productName": "",
  "productPrice": 0,
  "productShortName": "",
  "productDescription": "",
  "createdDate": new Date(),
  "deliveryTimeSpan": "",
  "categoryId": 0,
  "productImageUrl": ""
  }

  categoryList:any=[]
  productList:any=[]
  constructor(private productSrv:ProductService ){}

  ngOnInit(): void {
    this.getAllCategory()
    this.getProducts()
  }

  getAllCategory(){
    this.productSrv.getCategory().subscribe((res:any)=>{
      this.categoryList=res.data
    })
  }

  getProducts(){
    this.productSrv.getProducts().subscribe((res:any)=>{
      this.productList=res.data
    })
  }

  openSidePanel(){
    this.isSidePanelVisible=true
    console.log('open')
  }

  closeSidePanel(){
    this.isSidePanelVisible=false

  }

  onSave(){
    this.productSrv.saveProduct(this.productObj).subscribe((res:any)=>{
      if(res.result){
        alert('Product Created')
        this.getProducts()
      }else{
        alert(res.message)
      }
    })
  }

  onUpdate(){
    this.productSrv.updateProduct(this.productObj).subscribe((res:any)=>{
      if(res.result){
        alert('Product Updated')
        this.getProducts()
      }else{
        alert(res.message)
      }
    })
  }

  onEdit(item:any){
    
    this.productObj=item
    this.openSidePanel()
  }

  onDelete(item:any){
    const isDelete=confirm('Are you sure you want to delete?')

    if(isDelete){
      this.productSrv.deleteProduct(item.productId).subscribe((res:any)=>{
        if(res.result){
          alert('Product Deleted')
          this.getProducts()
        }else{
          alert(res.message)
        }
      })
    }
  }
}
