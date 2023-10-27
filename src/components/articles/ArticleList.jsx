import { useState, useEffect } from "react";
import { useSearchParams }  from 'react-router-dom'
import { getArticles } from "../../../utils/api";
import Loading from "../Loading";
import Error from "../Error";
import ArticleCard from "./ArticleCard"

export default function ArticleList () {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const topic = searchParams.get("topic");
    const sort_by = searchParams.get("sort_by");
    const order = searchParams.get("order");

    useEffect(() => {
        getArticles(topic, sort_by, order)
        .then((articles) => {
            setArticles(articles);
            setLoading(false)
        })
        .catch((err) => {
            console.log(err)
            setLoading(false)
            setError(err)
        })
    }, [topic, sort_by, order])

    if (loading) return (<Loading />)

    return (
        <section className="section">
            {error ? <Error message={error.message} onClose={() => setError(null)} /> : null}
            <ul className="ArticleList">
            {articles.map((article)=> {
                return (
                    <li key={article.title}>
                        <ArticleCard article={article} />
                    </li>
                )
            })}
            </ul>
        </section>
    )

}