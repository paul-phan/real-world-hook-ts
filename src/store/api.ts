import ky from 'ky'

let token = window.localStorage.getItem('jwt');


const defaultOptions: any = {
    prefixUrl: 'https://conduit.productionready.io/api',
    headers: {}
}

if (token) {
    Object.assign(defaultOptions.headers, {authorization: `Token ${token}`})
}
export let api = ky.create(defaultOptions);



export function setToken(newToken: string) {
    token = newToken
    window.localStorage.setItem('jwt', token);
    Object.assign(defaultOptions.headers, {authorization: `Token ${token}`})
}



export function removeToken() {
    token = null
    window.localStorage.removeItem('jwt');
    delete defaultOptions.headers.token
}

export function getToken() {
    return token
}

