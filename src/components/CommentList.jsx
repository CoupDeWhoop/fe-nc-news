import { useState, useEffect } from "react";
import Loading from "./Loading";
import CommentCard from "./CommentCard";
import AddComment from "./AddComment"
import { getComments } from "../../utils/api";

export default function CommentList({ article_id, comment_count}) {
    const [comments, setComments] = useState([])
    const [loading, setLoading] = useState(true)
    const [newComments, setNewComments] = useState({})

    useEffect(() => {
        getComments(article_id)
        .then((comments) => {
            setComments(comments);
            setLoading(false)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [newComments])

    if (loading) return (<Loading />)

    return (
        <section className="comments-section">
            <h3>{comment_count} Comments</h3>
            <AddComment article_id={article_id} setNewComments={setNewComments} />
            <ul className="CommentList">
            {comments.map((comment)=> {
                return (
                    <CommentCard key={comment.comment_id} body={comment.body} author={comment.author} votes={comment.votes} />
                )
            })}
            </ul>
        </section>
    )
}