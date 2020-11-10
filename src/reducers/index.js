const initialState = {
    books: [
        {
            id: 1,
            title: 'The history of the Russian Goverment',
            author: 'Boris Akunin'
        },
        {
            id: 2,
            title: 'Production-Ready Microservices',
            author: 'Susan J. Fowler'
        }
    ]
}

const reducer = (state = initialState, action) => {
    
    switch (action.type) {
        case 'BOOKS_LOADED':
            return {
                books: action.payload
            };
    
        default:
            return state;
    }
}

export default reducer;