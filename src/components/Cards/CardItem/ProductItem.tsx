import {FC} from "react";
import {IProduct} from "../../../store/product/product.types";
import useActions from "../../../hooks/useActions";
import {ContainerPostSC, PostButtonSC, PostContentSC, PostPriceSC, PostTitleSC} from "./style";


const ProductItem: FC<{product:IProduct}> = ({product}) =>{
    const {addItem} = useActions()

    return(
            <ContainerPostSC>
                <img
                    src={product.image}
                    alt={product.title}
                    width='200'
                    height='243'
                />
                <PostContentSC>
                    <PostTitleSC>{product.title}</PostTitleSC>
                    <PostPriceSC>${product.price}</PostPriceSC>
                </PostContentSC>
                <PostButtonSC>
                    Добавить в корзину
                </PostButtonSC>
            </ContainerPostSC>
    )
}

export default ProductItem