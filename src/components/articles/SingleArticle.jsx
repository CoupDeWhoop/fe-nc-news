import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../Loading";
import CommentList from "../comments/CommentList";
import Voter from "../Voter"
import { getSingleArticle } from "../../../utils/api";

export default function SingleArticle () {
    const { article_id } = useParams();
    const [ article, setArticle ] = useState({});
    const [loading, setLoading ] = useState(true)

    useEffect(() => {
        getSingleArticle(article_id)
        .then((article) => {
            setArticle(article)
            setLoading(false)

        })
        .catch((err) => {
            console.log(err)
        })
    }, [article_id])

    if(loading) return (<Loading />);
    const { 
        article_img_url, 
        author, body, 
        comment_count, 
        created_at, 
        title, 
        topic, 
        votes 
        } = article;

    const dateArray = created_at.split('T'); // deals with UTC timestamp -> 2020-02-29T11:12:00.000Z
    const date = dateArray[0]
    const time = dateArray[1].slice(0,5)

    return (
        <section className="section">
            <article className="SingleArticle">
                <h2>{title}</h2>
                <img src={article_img_url} alt={`a ${topic} image related to the article`} />
                <Voter votes={votes} article_id={article_id} />
                <p>{body}</p>
                <p className="article-metadata">
                    <span>Author: {author}</span>
                    <span>{date} {time}</span>
                </p>

            </article>
            <CommentList article_id={article_id} comment_count={comment_count} />
        </section>
      );
}      