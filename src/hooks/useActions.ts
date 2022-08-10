import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {cartActions} from "../store/reducers/cart/cartSlice";


const allActions = {
    ...cartActions,
}

const useActions = () => {
    const dispatch = useDispatch()

    return bindActionCreators(allActions,dispatch)
}

export default useActions