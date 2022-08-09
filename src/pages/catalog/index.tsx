import React from 'react';
import {NextPage} from "next";
import Products from "../../components/Cards/Products";

const CatalogPage:NextPage = () => {
    return (
        <div>
            <h1>Каталог</h1>
            <Products/>
        </div>
    );
};

export default CatalogPage