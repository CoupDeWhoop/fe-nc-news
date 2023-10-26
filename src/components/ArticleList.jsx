import { useState, useEffect } from "react";
import { useSearchParams }  from 'react-router-dom'
import { getArticles } from "../../utils/api";
import Loading from "./Loading";
import ArticleCard from "./ArticleCard"

export default function ArticleList () {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [searchParams, setSearchParams] = useSearchParams();
    const topic = searchParams.get("topic");
    console.log(topic)

    useEffect(() => {
        getArticles(topic)
        .then((articles) => {
            setArticles(articles);
            setLoading(false)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [topic])

    if (loading) return (<Loading />)

    return (
        <section className="section">
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