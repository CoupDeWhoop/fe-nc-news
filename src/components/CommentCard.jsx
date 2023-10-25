export default function CommentCard (props) {
    const { body, author, votes } = props;
    return (
            <article className="comment">
                <div className="comment-content">
                    <p>{body}</p>
                </div>
                <div className="comment-metadata">
                    <span className="comment-author">{author}</span>
                    <span className="comment-votes"><strong>Votes: {votes}</strong></span>
                </div>
                <div className="comment-divider"></div>
            </article>
    )
}

