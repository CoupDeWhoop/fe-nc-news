import { Link } from "react-router-dom";

export default function ArticleCard({ article }) {
    return (
      <div className="ArticleCard">
        <Link to={`/articles/${article.article_id}`} className="article-link">
            <img src={article.article_img_url}/>
        </Link>
        <Link to={`/articles/${article.article_id}`} className="article-link">
            <h4>{article.title}</h4>
        </Link>
        <p>Author: {article.author}</p>
        <p>Votes: {article.votes}</p>
      </div>
    );
  }