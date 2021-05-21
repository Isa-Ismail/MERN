const INITIAL_STATE = {
    
    Products:[
        
    ],
    cart:[
        
    ],

    total: 0

};

export const One = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case 'CART':

            return {
                ...state,

                cart: [...state.cart, action.payload.item],
                
                total: state.total + action.payload.item.wages,
            };  
            
        default:
            return state;
    }
};
