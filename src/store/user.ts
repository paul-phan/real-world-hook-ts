import {createSubscription, useSubscription} from "global-state-hook";
import {useEffect} from "react";
import {api, getToken} from "./api";

const userSubscription = createSubscription({})

export const useUser = () => {
    const {state, setState} = useSubscription(userSubscription)
    useEffect(() => {
        const token = getToken()
        if (token) {
            api.get('user').json().then(({user}: any) => {
                setState(user)
            })
        }
    }, [])
    return {user: state, setUser: setState}
}


export const login = ({email, password}) => api.post('users/login', {
    json: {user: {email, password}}
}).json()
