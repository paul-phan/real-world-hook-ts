import {createSubscription, useSubscription} from "global-state-hook";
import {useEffect, useState} from "react";
import {api} from "./api";

const articlesSubscription = createSubscription({articles: [], articlesCount: 0})
export const ARTICLE_PER_PAGE = 10;

export const useArticles = (page = 0, tag: any = '', setPage) => {
    const {state, setState} = useSubscription(articlesSubscription)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setPage(0)
    }, [tag])

    useEffect(() => {
        let mounted = true
        const offset = Number(page) * ARTICLE_PER_PAGE
        api.get(`articles?limit=${ARTICLE_PER_PAGE}&offset=${offset}${tag ? `&tag=${tag}` : ''}`).json<any>().then((articles) => {
            if (mounted) {
                setState(articles)
                setLoading(false)
            }
        })
        return () => {
            mounted = false
        }

    }, [page, setState, tag])
    return {articleStore: state, setArticleStore: setState, loading}
}
