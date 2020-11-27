import {getAllFromServer} from '../reducers/table_reducer'

export function requestIsSuccess(status) {
    return 200 <= status && status < 300
}

export function requestTableDecorator(apiCB, errorMessage,...args) {
    return async dispatch => {
        const response = await apiCB(...args)
        if(requestIsSuccess(response.status)) {
            dispatch(getAllFromServer())
            return Promise.resolve()
        } else {
            return Promise.reject(new Error(errorMessage))
        }
    }
}