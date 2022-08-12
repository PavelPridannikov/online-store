import React from 'react';
import useActions from "../../hooks/useActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {
    CartButtonsSC,
    CartPostContentSC, CartPostPriceSC,
    CartPostTitleSC,
    CartPriceContainerSC,
    ContainerCartPostSC
} from "../Cart/style";
import Counter from "../Counter/Counter";


const Favorites = () => {
    const {favorites} = useTypedSelector(state => state)
    const {addFavorites,removeFavorites} = useActions()

    return (
        <div>
            {favorites.length ? (
                <>
                    {favorites.map(product => (
                        <div key={`Favorites item: ${product.id}`}>
                            <div>
                                <div>
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        width='120'
                                        height='143'
                                    />
                                    <div>
                                        <CartPostTitleSC>{product.title}</CartPostTitleSC>
                                    </div>
                                    <div>
                                        <CartPostPriceSC>${product.price}</CartPostPriceSC>
                                    </div>
                                    <button onClick={() => removeFavorites({id:product.id})} >
                                        Удалить
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </>
            ) : (
                <div>Ничего не добавлено</div>
            )}
        </div>
    );
};

export default Favorites;