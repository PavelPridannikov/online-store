import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {cartActions} from "../store/cart/cartSlice";


const AllActions = {
    ...cartActions,
}

const useActions = () => {
    const dispatch = useDispatch()

    return bindActionCreators(AllActions,dispatch)
}

export default useActions