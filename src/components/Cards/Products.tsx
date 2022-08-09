import React, {FC, useState} from 'react';
import ProductItem from "./CardItem/ProductItem";
import {useGetProductsQuery} from "../../store/product/product.api";
import { CatalogProductsSC} from "./style";



export interface ILimitProductProps {
    limit?:number
}

const Products:FC<ILimitProductProps> = ({limit}) => {
    const {data,isLoading,error} = useGetProductsQuery(limit)
    return (
        <CatalogProductsSC>
            {data?.map(product => (
                <ProductItem key={product.id} product={product} />
            ))}
        </CatalogProductsSC>
    );
};

export default Products;