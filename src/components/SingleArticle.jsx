import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import { getSingleArticle } from "../../utils/api";

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
    const day = dateArray[0]
    const time = dateArray[1].slice(0,8)

    return (
        <section className="section">
          <ul className="SingleArticle">
            <li>
              <h2>{title}</h2>
            </li>
            <li>
              <img src={article_img_url} alt={`a ${topic} image related to the article`} />
            </li>
            <li>
              <p className="votes-comments">
                <span>Votes: {votes}</span>
                <span>Comments: {comment_count}</span>
              </p>
            </li>
            <li>
              <p>{body}</p>
            </li>
            <li>
              <p className="author-date-time">
                <span>Author: {author}</span>
                <span>{day} {time}</span>
              </p>
            </li>
          </ul>
        </section>
      );
}      