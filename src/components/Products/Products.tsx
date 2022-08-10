import React, {FC, useState} from 'react';
import ProductItem from "./ProductItem/ProductItem";
import {useGetProductsQuery} from "../../store/reducers/product/product.api";
import { CatalogProductsSC} from "./style";



export interface ILimitProductProps {
    limit?:number
}

const Products:FC<ILimitProductProps> = ({limit}) => {
    const {data,isLoading,error} = useGetProductsQuery(limit)
    return (
        <CatalogProductsSC>
            {isLoading && <h1>Идет загрузка...</h1>}
            {error && <h1>Произошла ошибка при загрузке каталога</h1>}
            {data?.map(product => (
                <ProductItem key={product.id} product={product} />
            ))}
        </CatalogProductsSC>
    );
};

export default Products;