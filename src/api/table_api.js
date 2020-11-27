import axios from 'axios'

const request = axios.create({ baseURL: 'http://localhost:8080' })


export function getAll() {
    return request.get('/vpn')
}

export function getById(id) {
    return request.get(`/vpn/${id}`)
}

export function deleteById(id) {
    return request.delete(`/vpn/${id}`)
}

export function put(title, server, password, expDate) {
    return request.put('/vpn', {
        vpnTitle: title,
        vpnServer: server,
        vpnPassword: password,
        expDate
    })
}

export function update(id, title, server, password, expDate) {
    return request.post(`/vpn/${id}`, {
        vpnTitle: title,
        vpnServer: server,
        vpnPassword: password,
        expDate
    })
}