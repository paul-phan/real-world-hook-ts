import {createSubscription, useSubscription} from "global-state-hook";
import {useEffect} from "react";
import {api} from "./api";

const tagsSubscription = createSubscription([])

export const useTag = () => {
    const {state, setState} = useSubscription(tagsSubscription)
    useEffect(() => {
        if (state.length) {
            return
        }
        api.get('tags').json<any>().then(({tags}) => {
            setState(tags)
        })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return {tags: state, setTag: setState}
}
