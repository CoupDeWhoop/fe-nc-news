import { FaThumbsUp, FaRegThumbsUp, FaThumbsDown, FaRegThumbsDown } from 'react-icons/fa6';
import { useState } from "react";
import Error from './Error';
import { updateVotes } from "../../utils/api";

export default function Voter({votes, article_id}) {
    const [error, setError] = useState(null);
    const [voteDiff, setVoteDiff] = useState(0);

    const incVote = (value) => {
        setVoteDiff((currentVoteDiff) => {
            return currentVoteDiff + value;
        })
        updateVotes(article_id, value).catch((err) => {
            setError(err)
            setVoteDiff(0);
        })
    };

    return (
            <div className="voting-component">
                {error ? (
                    <Error message={error.message} onClose={() => setError(null)} />
                    ) : null}

                <button 
                    className={`upvote ${voteDiff === 1? 'flash-icon' : ''}`}
                    disabled={voteDiff === 1}
                    onClick={() => {incVote(1)}} 
                >
                    {voteDiff === 1 ? <FaThumbsUp className="vote-icon" /> : <FaRegThumbsUp className="vote-icon" />}
                </button>
                <span >{votes + voteDiff}</span>
                <button 
                    className="downvote" 
                    disabled={voteDiff === -1}
                    onClick={() => {incVote(-1)}} 
                >
                    {voteDiff === -1 ? <FaThumbsDown className="vote-icon" /> : <FaRegThumbsDown className="vote-icon" />}
                </button>
            </div>
    )
}