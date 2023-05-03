import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { productListReducer, productDetailReducer } from "./reducers/productReducers";
//import { ..., ... } from "./reducers/cartReducers";
//import { ..., ... } from "./reducers/userReducers";
//import { ..., ... } from "./reducers/orderReducers";


//Esto es para que si el usuario estuvo loguado tenga guardados los datos en local storage (usuario, carrito, dirección) y sino arranca sin nada
const initialState = {
	userSignin: {
		userInfo: localStorage.getItem("userInfo")
			? JSON.parse(localStorage.getItem("userInfo"))
			: null,
	},
	cart: {
		cartItems: localStorage.getItem("cartItems")
			? JSON.parse(localStorage.getItem("cartItems"))
			: [],
		shippingAddress: localStorage.getItem("shippingAddress")
			? JSON.parse(localStorage.getItem("shippingAddress"))
			: {},
		paymentMethod: "Paypal",
	},
};

//Aca van todos los reducers
const reducer = combineReducers({
	productList: productListReducer, 
	productDetail: productDetailReducer, 
	
});

export const store2 = createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(thunk))
);