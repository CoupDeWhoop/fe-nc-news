export default function ArticleCard({ article }) {
    return (
      <div className="ArticleCard">
        <img src={article.article_img_url}/>
        <h4>{article.title}</h4>
        <p>Author: {article.author}</p>
        <p>Votes: {article.votes}</p>
      </div>
    );
  }