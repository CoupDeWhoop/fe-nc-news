import { FaThumbsUp, FaRegThumbsUp, FaThumbsDown, FaRegThumbsDown } from 'react-icons/fa6';
import { useState } from "react";
import { updateVotes } from "../../utils/api";

export default function Voter({votes, article_id}) {
    const [voteDiff, setVoteDiff] = useState(0);
    // const [isFlashing, setIsFlashing] = useState(false);

    const incVote = (value) => {
        setVoteDiff((currentVoteDiff) => {
            return currentVoteDiff + value;
        })
        updateVotes(article_id, value).catch(() => {
            setVoteDiff(0);
        })

        // if (value === 1) {
        //     setIsFlashing(true);
        //     console.log(isFlashing)
        //     setTimeout(() => {
        //         setIsFlashing(false);
        //     }, 1000);
        // }
    };




    return (
            <div className="voting-component">
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