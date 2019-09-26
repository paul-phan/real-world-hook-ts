import LoadingSpinner from './LoadingSpinner';
import React from 'react';
import {ARTICLE_PER_PAGE, useArticles} from "../store/article";
import {Link, useRoute} from "wouter";

const ArticleList = () => {
    const [, params] = useRoute("/tags/:tag");
    const [, articleParam] = useRoute("/articles/:page");
    const {articleStore, loading} = useArticles((articleParam && articleParam.page) || '0', (params && params.tag))
    const totalPagesCount = Math.ceil(articleStore.articlesCount / ARTICLE_PER_PAGE);

    if (loading && articleStore.articles.length === 0) {
        return (
            <LoadingSpinner/>
        );
    }

    if (articleStore.articles.length === 0) {
        return (
            <div className="article-preview">
                No articles are here... yet.
            </div>
        );
    }


    return (
        <div>
            {
                articleStore.articles.map(article => {
                    return (
                        <ArticlePreview article={article} key={article.slug}/>
                    );
                })
            }

            {totalPagesCount > 1 && <ListPagination
                totalPagesCount={totalPagesCount}
                currentPage={articleParam && articleParam.page}
            />}
        </div>
    );
};

export default ArticleList;

const FAVORITE_CLASS = 'btn btn-sm btn-primary';
const NOT_FAVORITE_CLASS = 'btn btn-sm btn-outline-primary';

const ArticlePreview = ({article}) => {
    const favoriteButtonClass = article.favorited ? FAVORITE_CLASS : NOT_FAVORITE_CLASS;
    return (
        <div className="article-preview">
            <div className="article-meta">
                <Link to={`/@${article.author.username}`}>
                    <img src={article.author.image} alt=""/>
                </Link>

                <div className="info">
                    <Link className="author" to={`/@${article.author.username}`}>
                        {article.author.username}
                    </Link>
                    <span className="date">
            {new Date(article.createdAt).toDateString()}
          </span>
                </div>

                <div className="pull-xs-right">
                    <button className={favoriteButtonClass}
                        // onClick={this.handleClickFavorite}
                    >
                        <i className="ion-heart"/> {article.favoritesCount}
                    </button>
                </div>
            </div>

            <Link to={`/article/${article.slug}`} className="preview-link">
                <h1>{article.title}</h1>
                <p>{article.description}</p>
                <span>Read more...</span>
                <ul className="tag-list">
                    {
                        article.tagList.map(tag => {
                            return (
                                <li className="tag-default tag-pill tag-outline" key={tag}>
                                    {tag}
                                </li>
                            )
                        })
                    }
                </ul>
            </Link>
        </div>
    );
}


const ListPagination = props => {
    const range: number[] = [];
    for (let i = 0; i < props.totalPagesCount; ++i) {
        range.push(i);
    }
    return (
        <nav>
            <ul className="pagination">

                {
                    range.map(v => {
                        const isCurrent = v === Number(props.currentPage) - 1;
                        return (
                            <li
                                className={isCurrent ? 'page-item active' : 'page-item'}
                                key={v.toString()}
                            >
                                <Link className="page-link" to={`/articles/${v + 1}`}>{v + 1}</Link>
                            </li>
                        );
                    })
                }

            </ul>
        </nav>
    );
};
