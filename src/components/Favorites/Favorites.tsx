import React, {FC} from 'react';
import useActions from "../../hooks/useActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {
    ContainerPostSC,
    PostTitleSC,
    PostPriceSC,
} from "../Products/ProductItem/style"
import { FavoritesContainerSC} from "./style";
import {ButtonFavoriteUI} from "../../UI/ButtonFavoriteUI/ButtonFavoriteUI";
import {IProduct} from "../../store/reducers/product/product.types";


const Favorites: FC<{product:IProduct}>  = ({product}) => {
    const {removeFavorites} = useActions()

    const {favorites} = useTypedSelector(state => state)

    return (
        <FavoritesContainerSC>
            {favorites.length ? (
                <>
                    {favorites.map(product => (
                        <div key={`Favorites item: ${product.id}`}>
                            <div>
                                <ContainerPostSC>
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        width='200'
                                        height='243'
                                    />
                                    <div>
                                        <PostTitleSC>{product.title}</PostTitleSC>
                                    </div>
                                    <div>
                                        <PostPriceSC>${product.price}</PostPriceSC>
                                    </div>
                                        <ButtonFavoriteUI onClick={() => removeFavorites({id:product.id})}>
                                            <svg width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12.5 23C4.25 15.375 0 11.5 0 6.875C0 3 3 0 6.875 0C9 0 11.125 1 12.5 2.625C13.875 1 16 0 18.125 0C22 0 25 3 25 6.875C25 11.625 20.75 15.5 12.5 23Z" fill="#D100A3"/>
                                            </svg>
                                        </ButtonFavoriteUI>
                                </ContainerPostSC>
                            </div>
                        </div>
                    ))}
                </>
            ) : (
                <div>Ничего не добавлено</div>
            )}
        </FavoritesContainerSC>
    );
};

export default Favorites;