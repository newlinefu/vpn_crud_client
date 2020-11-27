import {getAllFromServer} from './table_reducer'

const SET_INIT = 'SET_INIT'

const defaultState = {
    isInit: false
}

export default function initReducer(state = defaultState, action) {
    switch (action.type) {
        case(SET_INIT): {
            return {
                ...state,
                isInit: action.init
            }
        }
        default: {
            return state
        }
    }
}

function setInitAC(initValue) {
    return {
        type: SET_INIT,
        init: initValue
    }
}

export function toInitApp() {
    return async dispatch => {
        const getAllPromise = dispatch(getAllFromServer())
        try {
            await Promise.all([getAllPromise])
            dispatch(setInitAC(true))
            return Promise.resolve()
        } catch (err) {
            return Promise.reject(new Error('Application is not initialized. Repeat, please.'))
        }
    }
}