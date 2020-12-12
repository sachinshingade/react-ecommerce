import {
    ADD_PRODUCT_TO_CART,
    DECREMENT_CART_ITEM_QUANTITY,
    INCREMENT_CART_ITEM_QUANTITY,
    REMOVE_PRODUCT_FROM_CART
} from '../actions';
// import {phones} from "../data/phones";

const initialState = {
    products: [],
    cart: []
};


const cartReducer = (state = initialState, action ) => {
    let updatedCart;
    let updatedItemIndex;
    console.log("state", state)
    console.log("action", action)
    switch (action.type) {
        case INCREMENT_CART_ITEM_QUANTITY:
            updatedCart = [...state.cart];
            updatedItemIndex = updatedCart.findIndex(
                item => item.id === action.payload
            );

            const incrementedItem = {
                ...updatedCart[updatedItemIndex]
            };

            incrementedItem.quantity++;
            console.log("tt", incrementedItem.quantity * incrementedItem.price)
            incrementedItem.total = incrementedItem.quantity * incrementedItem.price

            updatedCart[updatedItemIndex] = incrementedItem;

            return {...state, cart: updatedCart};

        case DECREMENT_CART_ITEM_QUANTITY:
            updatedCart = [...state.cart];
            updatedItemIndex = updatedCart.findIndex(
                item => item.id === action.payload
            );

            const decrementedItem = {
                ...updatedCart[updatedItemIndex]
            };

            decrementedItem.quantity--;
            console.log("decrementedItem.quantity--", decrementedItem.quantity == 0)
            if(decrementedItem.quantity === 0) {
                updatedCart.splice(updatedItemIndex, 1)
                return {...state, cart: updatedCart};
            }
            console.log("tt", decrementedItem.quantity * decrementedItem.price)
            decrementedItem.total = decrementedItem.quantity * decrementedItem.price

            updatedCart[updatedItemIndex] = decrementedItem;

            return {...state, cart: updatedCart};

        case ADD_PRODUCT_TO_CART:
            updatedCart = [...state.cart];
            updatedItemIndex = updatedCart.findIndex(item => item.id === action.payload.id);

            if(updatedItemIndex < 0) {
                updatedCart.push({...action.payload, quantity: 1, total: action.payload.price});
            } else {
                const updatedItem = {
                    ...updatedCart[updatedItemIndex]
                };

                updatedItem.quantity++;
                updatedItem.total = updatedItem.quantity * updatedItem.price
                updatedCart[updatedItemIndex] = updatedItem;
            }

            return {...state, cart: updatedCart};
        case REMOVE_PRODUCT_FROM_CART:
            updatedCart = [...state.cart];
            updatedItemIndex = updatedCart.findIndex(
                item => item.id === action.payload
            );

            updatedCart.splice(updatedItemIndex, 1);

            return {...state, cart: updatedCart};
        default:
            return state;

    }
};

export default cartReducer;