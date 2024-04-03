export const Constant={
    API_END_POINT:'https://freeapi.gerasim.in/api/BigBasket/',
    METHOD : {
        GET_ALL_PRODUCT : 'GetAllProducts',
        GET_ALL_CATEGORY : 'GetAllCategory',
        GET_ALL_PRPODUCT_BY_CATEGORY:'GetAllProductsByCategoryId?id=',

        CREATE_PRODUCT : 'CreateProduct',
        UPDATE_PRODUCT : 'UpdateProduct',
        DELETE_PRODUCT : 'DeleteProductById?id=',
        ADD_TO_CART : 'AddToCart',
        REMOVE_CART:'DeleteProductFromCartById?id=',
       GET_CART_BY_CUST :'GetCartProductsByCustomerId?id='

    }
}