import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NoDataFound.css';
const NoDataFound = ({ type, link, desc }) => {
    const navigate = useNavigate();
    return (
        <div id="notfound">
            <div class="notfound">
                <div class="notfound-401"></div>
                <h2>Oops! {type} Not Be Found</h2>
                <p>
                    Sorry but the {type} you are looking for does not exist, have been removed. name changed or is temporarily unavailable
                </p>
                <button onClick={() => navigate('/createcommunity', { replace: true })}>{desc}</button>
            </div>
        </div>
    );
};

export default NoDataFound;
