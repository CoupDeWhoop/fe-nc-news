import { useState, useContext } from "react";
import { TextField, Button, Box } from '@mui/material';
import Error from '../Error';
import { addComment } from "../../../utils/api"; 
import { UserContext } from '../../contexts/UserContext';


export default function AddComment ({ article_id, setNewComments }) {
    const { user } = useContext(UserContext);
    const [error, setError] = useState(null);
    const [comment, setComment] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleCommentChange = (e) => {
        setComment(e.target.value);
    };

    const handleSubmitComment = () => {
        setIsSubmitting(true);
        addComment(article_id, user.username, comment)
        .then((comment) => {
            setNewComments(comment.body)
            setComment("");
            setIsSubmitting(false);
          })
        .catch((err) => {
            setError(err)
        })
    };

    return (
        <Box id="comment-box" className="add-comment-container" sx={{ display: 'flex', flexDirection: 'column' }}>
            {error ? (
                <Error message={error.message} onClose={() => setError(null)} />
                ) : null}
            <TextField
                id="filled-multiline-flexible"
                label="Write your comment here"
                value={comment}
                onChange={handleCommentChange}
                multiline
                maxRows={4}
                variant="filled"
            />
            <Button variant="contained" onClick={handleSubmitComment} disabled={isSubmitting || comment.trim() === ""}>
                {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
        </Box>
    );
}