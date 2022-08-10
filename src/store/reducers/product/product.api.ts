import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IProduct} from "./product.types";


export const productApi = createApi({
    reducerPath: 'api/products',
    baseQuery:fetchBaseQuery({
        baseUrl:'https://fakestoreapi.com'}),
    endpoints: build => ({
        getProducts: build.query<IProduct[],number|undefined>({query:(limit?:number) => `products?limit=${limit}`})
    })
})

export const {useGetProductsQuery} = productApi