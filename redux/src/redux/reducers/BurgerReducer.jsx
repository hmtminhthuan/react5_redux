const burgerState = {
    burger: {
        salad: 1,
        cheese: 1,
        beef: 1,
    },
    menu: {
        salad: 10,
        cheese: 20,
        beef: 55,
    },
    total: 85,
}

export const arrBurger = (state = burgerState, action) => {
    switch (action.type) {
        case 'soLuong': {
            let { payload, item } = action
            if (item === -1 && state.burger[payload] < 1) {
                return { ...state }
            }
            let burgerUpdate = { ...state.burger }
            burgerUpdate[payload] += item;
            state.total += item * state.menu[payload];
            state.burger = burgerUpdate;
            return { ...state }
        }
        default: return { ...state };
    }
}