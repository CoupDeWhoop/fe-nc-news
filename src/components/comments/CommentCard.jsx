import { useState, useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import DeleteCommentButton from "./DeleteCommentButton";

export default function CommentCard (props) {
    const { allUsers, user } = useContext(UserContext);
    const { body, author, votes, commentId, setDeleted, showDeleteMessage, setShowDeleteMessage } = props;

    const authorIndex = allUsers.findIndex((u) => u.username === author);

    return (
        <article className="CommentCard">
            <div className="comment-grid-container">
                <div className="grid-item grid-item-image">
                    <div className="comment-image-container">
                        <img src={allUsers[authorIndex].avatar_url}/>
                    </div>
                </div>
                <div className="grid-item comment-body">
                    <p>{body}</p> 
                    {showDeleteMessage.show && showDeleteMessage.commentId === commentId ? (
                    <div className="delete-message">
                        Deleting comment...
                    </div>
                    ) : null}
                </div>
                <div className="grid-item delete-button-grid">
                    {user.username === author ? (
                        <DeleteCommentButton 
                            commentId={commentId} 
                            setDeleted={setDeleted} 
                            setShowDeleteMessage={setShowDeleteMessage}
                            /> ) : null}
                </div>
                <div className="grid-item">
                    <span className="comment-author">{author}</span>
                </div>
                <div className="grid-item">
                    <span className="comment-votes"><strong>Votes: {votes}</strong></span>
                </div>
            </div>
        </article>
    )
}

