import * as tableAPI from '../../api/table_api'
import {requestIsSuccess, requestTableDecorator} from '../utils/utils'

const SET_VPN_LIST = 'SET_VPN_LIST'
const ADD_VPN = 'ADD_VPN'
const REMOVE_EMPTY_VPNS = 'REMOVE_EMPTY_VPNS'

const defaultState = {
    vpnList: []
}

export default function tableReducer(state = defaultState, action) {
    switch (action.type) {
        case(SET_VPN_LIST): {
            return {
                ...state,
                vpnList: action.newVpnList
            }
        }
        case(ADD_VPN): {
            return {
                ...state,
                vpnList: [...state.vpnList, action.vpn]
            }
        }
        case(REMOVE_EMPTY_VPNS): {
            return {
                ...state,
                vpnList: state.vpnList.filter(vpn => vpn !== null)
            }
        }
        default: {
            return state
        }
    }
}

function setVpnListAC(newVpnList) {
    return {
        type: SET_VPN_LIST,
        newVpnList
    }
}

export function addVpnAC(vpn) {
    return {
        type: ADD_VPN,
        vpn
    }
}

export function removeEmptyVpnsAC() {
    return {
        type: REMOVE_EMPTY_VPNS
    }
}

export function getAllFromServer() {
    return async dispatch => {
        const response = await tableAPI.getAll()
        if(requestIsSuccess(response.status)) {
            dispatch(setVpnListAC(response.data))
            return Promise.resolve()
        } else {
            return Promise.reject(new Error('Failed to get all vpn list'))
        }
    }
}

export function getSingleVPNFromServer(id) {
    return async dispatch => {
        const response = await tableAPI.getById(id)
        return requestIsSuccess(response.status)
            ? Promise.resolve()
            : Promise.reject(new Error('Failed to get all vpn list'))
    }
}

export const deleteVPNByIdFromServer = (id) => requestTableDecorator(
    tableAPI.deleteById,
    'Failed to delete',
    id
)

export const updateVPNInServer = (id, title, server, password, expDate) => requestTableDecorator(
    tableAPI.update,
    'Failed to update vpn',
    id,
    title,
    server,
    password,
    expDate
)

export const putVPNOnServer = (title, server, password, expDate) => requestTableDecorator(
    tableAPI.put,
    'Failed to put vpn',
    title,
    server,
    password,
    expDate
)


