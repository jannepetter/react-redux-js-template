import service1 from '../services/service1'

const reducer1 = (state = [], action) => {
    switch (action.type) {
        case 'INIT':
            state = state.concat(action.data.results)
            return state
        default:
            return state
    }
}

export const getStuff = (page) => {
    return async (dispatch) => {
        const response = await service1.getPage(page)
        dispatch({
            type: 'INIT',
            data: response
        })
    }
}
export default reducer1 