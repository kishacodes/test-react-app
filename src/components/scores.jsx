import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

const Scores = () => {
    const [scores, setScores] = useState([]);

    useEffect(() => {
        const getScores = async () => {
            const resp = await fetch('/api/scores');
            const scoresResp = await resp.json();
            setScores(scoresResp);
        };

        getScores();
    }, []);

    return(
        <div>
            <h1>Scores</h1>
            {scores.map(score => (
                <div key={score.id}>
                    <h2>
                        <Link to={`/scores/${score.id}`}>{score.title}</Link>
                    </h2>
                </div>
                ))}
        </div>
    );
};

export default Scores