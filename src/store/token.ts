import {createSubscription, useSubscription} from "global-state-hook";
import {useEffect} from "react";
import {api} from "./api";

const tokenSubscription = createSubscription(window.localStorage.getItem('jwt'))

export const useToken = () => {
    const {state: token, setState: setToken} = useSubscription(tokenSubscription)
    useEffect(() => {
        if(token) {
            api.get('/user').then(console.log)
        }
    }, [])
    return {token, setToken}
}
