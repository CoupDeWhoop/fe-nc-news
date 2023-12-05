import { useState } from 'react'
import { deleteComment } from "../../../utils/api";

export default function DeleteCommentButton ({commentId, setDeleted, setShowDeleteMessage}) {
    const [isDeleting, setIsDeleting] = useState(false);
    const handleClick = () => {
        setIsDeleting(true);
        setShowDeleteMessage({show: true, commentId: commentId});
        deleteComment(commentId)
        .then(() => {
            setDeleted(commentId)
            setTimeout(() => {
                setIsDeleting(false);
                setShowDeleteMessage({show: false, commentId: null});
              }, 2000);
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return (
        <button className={`delete-comment ${isDeleting ? 'disable-delete': ''}`} onClick={handleClick} disabled={isDeleting}>Delete</button>
    )
}