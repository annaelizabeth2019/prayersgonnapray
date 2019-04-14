import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './GlitchBtn.scss'

const GlitchBtn = (props) => {
    return (
        <div className="GlitchBtn">
            <Link to={props.link} className="GlitchBtn" data-text="PRAY!">
                <button>
                    PRAY!
                </button>
            </Link>
        </div>
    )
}

export default GlitchBtn; 