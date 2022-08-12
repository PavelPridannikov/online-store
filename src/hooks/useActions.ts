import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {cartActions} from "../store/reducers/cart/cartSlice";
import {favoritesAction} from "../store/reducers/favorites/favoritesSlice";


const allActions = {
    ...cartActions,
    ...favoritesAction

}

const useActions = () => {
    const dispatch = useDispatch()

    return bindActionCreators(allActions,dispatch)
}

export default useActions