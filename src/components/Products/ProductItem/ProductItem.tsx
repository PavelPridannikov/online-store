import React, {FC, useState} from "react";
import {IProduct} from "../../../store/reducers/product/product.types";
import useActions from "../../../hooks/useActions";
import {ContainerPostSC, PostButtonSC, PostContentSC, PostPriceSC, PostTitleSC} from "./style";
import {useTypedSelector} from "../../../hooks/useTypedSelector";


const ProductItem: FC<{product:IProduct}> = ({product}) =>{
    const {addItem} = useActions()
    const {addFavorites,removeFavorites} = useActions()

    const {cart} = useTypedSelector(state => state)
    const {favorites} = useTypedSelector(state => state)

    const [isFav,setIsFav] = useState(favorites.includes(product))

    const isExistsInCart = cart.some(p => p.id === product.id)
    const isExistsInFavorites = favorites.some(f => f.id === product.id)

    
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
                <button onClick={() => !isExistsInFavorites && addFavorites(product)}>
                    {isExistsInFavorites ?
                        <svg width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.5 23C4.25 15.375 0 11.5 0 6.875C0 3 3 0 6.875 0C9 0 11.125 1 12.5 2.625C13.875 1 16 0 18.125 0C22 0 25 3 25 6.875C25 11.625 20.75 15.5 12.5 23Z" fill="#D100A3"/>
                        </svg>
                        :
                        <svg width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.625 19.4809C18.5 14.0765 22.5 10.5574 22.625 6.91257C22.625 4.39891 20.75 2.51366 18.25 2.51366C16.25 2.51366 14.375 3.77049 13.75 5.53006H11.375C10.625 3.77049 8.75 2.51366 6.875 2.51366C4.375 2.51366 2.5 4.39891 2.5 6.91257C2.5 10.5574 6.375 14.0765 12.375 19.4809L12.5 19.6066L12.625 19.4809ZM18.125 0C22 0 25 3.01639 25 6.91257C25 11.5628 20.75 15.459 12.5 23C4.25 15.5847 0 11.6885 0 6.91257C0 3.01639 3 0 6.875 0C9 0 11.125 1.00546 12.5 2.63934C13.875 1.00546 16 0 18.125 0Z" fill="#00CED1"/>
                    </svg>}
                </button>
                <button onClick={() => removeFavorites({id:product.id})} >
                    <svg width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.625 19.4809C18.5 14.0765 22.5 10.5574 22.625 6.91257C22.625 4.39891 20.75 2.51366 18.25 2.51366C16.25 2.51366 14.375 3.77049 13.75 5.53006H11.375C10.625 3.77049 8.75 2.51366 6.875 2.51366C4.375 2.51366 2.5 4.39891 2.5 6.91257C2.5 10.5574 6.375 14.0765 12.375 19.4809L12.5 19.6066L12.625 19.4809ZM18.125 0C22 0 25 3.01639 25 6.91257C25 11.5628 20.75 15.459 12.5 23C4.25 15.5847 0 11.6885 0 6.91257C0 3.01639 3 0 6.875 0C9 0 11.125 1.00546 12.5 2.63934C13.875 1.00546 16 0 18.125 0Z" fill="#00CED1"/>
                    </svg>
                </button>
            </ContainerPostSC>
    )
}

export default ProductItem