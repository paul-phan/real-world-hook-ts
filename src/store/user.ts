import {createSubscription, useSubscription} from "global-state-hook";
import {useEffect} from "react";
import {api, getToken} from "./api";

const userSubscription = createSubscription(null)

export const useUser = () => {
    const {state: user, setState: setUser} = useSubscription(userSubscription)
    useEffect(() => {
        const token = getToken()
        if (token) {
            api.get('/user').then(console.log)
        }
    }, [])
    return {user, setUser}
}
