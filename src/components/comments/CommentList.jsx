import { useState, useEffect } from "react";
import Loading from "../Loading";
import CommentCard from "./CommentCard";
import AddComment from "./AddComment"
import { getComments } from "../../../utils/api";

export default function CommentList({ article_id, comment_count}) {
    const [comments, setComments] = useState([])
    const [loading, setLoading] = useState(true)
    const [newComments, setNewComments] = useState({})
    const [deleted, setDeleted] = useState("")
    const [showDeleteMessage, setShowDeleteMessage] = useState({show: false, commentId: null});

    useEffect(() => {
        getComments(article_id)
        .then((comments) => {
            setComments(comments);
            setLoading(false)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [newComments, deleted])

    if (loading) return (<Loading />)

    return (
        <section className="comments-section">
            <h3>{comment_count} Comments</h3>
            <div className="add-comment">
                <AddComment article_id={article_id} setNewComments={setNewComments} />
            </div>
            <ul className="CommentList">
            {comments.map((comment)=> {
                return (
                    <CommentCard 
                        key={comment.comment_id} 
                        commentId={comment.comment_id} 
                        body={comment.body} 
                        author={comment.author} 
                        votes={comment.votes} 
                        setDeleted={setDeleted}
                        showDeleteMessage={showDeleteMessage}
                        setShowDeleteMessage={setShowDeleteMessage}/>
                )
            })}
            </ul>
        </section>
    )
}