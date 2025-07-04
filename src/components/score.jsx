import React, { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';

const Score = () => {
    const [score, setScore] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const getScore = async () => {
            const resp = await fetch(`/api/score/${id}`);
            const scoreResp = await resp.json();
            setScore(scoreResp);
        };

        getScore();
    }, [id]);

    if (!Object.keys(score).length) return <div />;

    return(
        <div>
            <h1>{score.title}</h1>
            <p>{score.text}</p>
            <p>
                <em>Published {new Date(score.published_at).toLocaleString()}</em>
            </p>
            <p>
                <Link to="/"> Go back</Link>
            </p>
        </div>
    );
};

export default Score;