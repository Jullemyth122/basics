import React from 'react';

const Button = ({ backgroundColor, text }) => {
    return (
        <button className="custom-button" style={{ backgroundColor }}>
            {text}
        </button>
    );
};

export default Button;
