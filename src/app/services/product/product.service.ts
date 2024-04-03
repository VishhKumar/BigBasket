import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constant } from '../constant/constant';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  public cartUpdated: Subject<boolean> = new Subject()

  getCategory(){
    return this.http.get(Constant.API_END_POINT + Constant.METHOD.GET_ALL_CATEGORY)
  }
  getProductByCategory(id:number){
    return this.http.get(Constant.API_END_POINT + Constant.METHOD.GET_ALL_PRPODUCT_BY_CATEGORY+id)
  }

  getProducts(){
    return this.http.get(Constant.API_END_POINT + Constant.METHOD.GET_ALL_PRODUCT)
  }

  saveProduct(obj:any){
    return this.http.post(Constant.API_END_POINT + Constant.METHOD.CREATE_PRODUCT , obj)
  }
  updateProduct(obj:any){
    return this.http.post(Constant.API_END_POINT + Constant.METHOD.UPDATE_PRODUCT , obj)
  }
  deleteProduct(id:any){
    return this.http.get(Constant.API_END_POINT + Constant.METHOD.DELETE_PRODUCT + id)
  }

  addToCart(obj:any){
    return this.http.post(Constant.API_END_POINT + Constant.METHOD.ADD_TO_CART , obj)
  }
  getCartDataByCustID(custId:number){
    return this.http.get(Constant.API_END_POINT + Constant.METHOD.GET_CART_BY_CUST + custId)
  }
  removeProductByCartID(cartId:number){
    return this.http.get(Constant.API_END_POINT + Constant.METHOD.REMOVE_CART + cartId)
  }


}
