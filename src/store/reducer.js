const defaultState = {
    isLogin: false,
    users: [{email: 'seva', pass: '1234', id: '123123asd'}],
    currentEmail: '',
    currentPass: '',

};


export const reducer = (state = defaultState, action) => {


    switch (action.type) {
        case "LOGIN":
            return {...state, isLogin: true};
        case "LOGOUT":
            return {...state, isLogin: false};
        case "REGISTER":
            return {...state, users: [...state.users, action.payload]};
        case "emailChange":
            return {...state, currentEmail: action.payload};
        case "passChange":
            return {...state, currentPass: action.payload};


        default:
            return state;
    }

}