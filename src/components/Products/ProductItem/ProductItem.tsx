import {FC} from "react";
import {IProduct} from "../../../store/reducers/product/product.types";
import useActions from "../../../hooks/useActions";
import {ContainerPostSC, PostButtonSC, PostContentSC, PostPriceSC, PostTitleSC} from "./style";
import {useTypedSelector} from "../../../hooks/useTypedSelector";


const ProductItem: FC<{product:IProduct}> = ({product}) =>{
    const {addItem,removeItem} = useActions()

    const {cart} = useTypedSelector(state => state)

    const isExistsInCart = cart.some(p => p.id === product.id)

    
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
                <PostButtonSC onClick={() => !isExistsInCart && addItem(product)}>
                    {isExistsInCart ? 'Уже в корзине' : 'Добавить в корзину'}
                </PostButtonSC>
            </ContainerPostSC>
    )
}

export default ProductItem