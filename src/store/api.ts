import ky from 'ky'



export const api = ky.create({prefixUrl: 'https://conduit.productionready.io/api'});

const limit = (count: number, p: number) => `limit=${count}&offset=${p ? p * count : 0}`;
const omitSlug = (article: object) => Object.assign({}, article, { slug: undefined })

let token = window.localStorage.getItem('jwt');

export function setToken(newToken: string) {
    token = newToken
    window.localStorage.setItem('jwt', token);
}

export function removeToken() {
    token = null
    window.localStorage.removeItem('jwt');
}

export function getToken() {
    return token
}

const handleErrors = (err: any) => {
    if (err && err.response && err.response.status === 401) {
        // authStore.logout();
    }
    return err;
};

