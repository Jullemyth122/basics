import React from 'react';

const TextField = ({ id, className, backgroundColor, borderColor }) => {
    return (
        <input
            type="text"
            id={id}
            className={`custom-textfield ${className}`}
            style={{ backgroundColor, borderColor }}
            placeholder="Enter text"
        />
    );
};

export default TextField;
