import { useState, useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

export default function CommentCard (props) {
    const { allUsers, user } = useContext(UserContext);
    const { body, author, votes } = props;

    const authorIndex = allUsers.findIndex((u) => u.username === author);

    return (

                <div className="comment-grid-container">
                    <div className="grid-item">
                        <div class="comment-image-container">
                            <img src={allUsers[authorIndex].avatar_url}/>
                        </div>
                    </div>
                    <div className="grid-item comment-body">
                        <p>{body}</p>
                    </div>
                    <div className="comment-metadata">
                        <span className="comment-author">{author}</span>
                        <span className="comment-votes"><strong>Votes: {votes}</strong></span>
                    </div>
                </div>


    )
}

