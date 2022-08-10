import React from 'react';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import useActions from "../../hooks/useActions";
import {
    CartButtonsSC,
    CartPostContentSC,
    CartPostPriceSC,
    CartPostTitleSC, CartPriceContainerSC,
    ContainerCartPostSC
} from "./style";
import Counter from "../Counter/Counter";

const Cart = () => {
    const {cart} = useTypedSelector(state => state)
    const {removeItem} = useActions()
    return (
        <div>
            <h1>Корзина</h1>
            {cart.length ? (
                <>
                    {cart.map(product => (
                        <div key={`Cart item: ${product.id}`}>
                            <div>
                                <ContainerCartPostSC>
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        width='120'
                                        height='143'
                                    />
                                    <CartPostContentSC>
                                        <CartPostTitleSC>{product.title}</CartPostTitleSC>
                                        <CartButtonsSC >
                                            <button>
                                                Избранное
                                            </button>
                                            <button onClick={() => removeItem({id:product.id})} >
                                                Удалить
                                            </button>
                                        </CartButtonsSC>
                                    </CartPostContentSC>
                                    <CartPriceContainerSC>
                                        <CartPostPriceSC>${product.price}</CartPostPriceSC>
                                        <Counter/>
                                    </CartPriceContainerSC>
                                </ContainerCartPostSC>
                            </div>
                        </div>
                    ))}
                </>
            ) : (
                <div>Корзина пуста</div>
            )}
        </div>
    );
};

export default Cart;