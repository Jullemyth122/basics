import React from 'react';
import Button from './Button';
import TextField from './TextField';
import H2 from './H2';

const Second = () => {
    return (
        <div className="center-container">
            <div className="component-group">
                <Button backgroundColor="blue" text="Submit" />
                <Button backgroundColor="red" text="Cancel" />
            </div>
            <div className="component-group">
                <TextField id="text-field-1" className="round-border" borderColor="black" />
                <TextField id="text-field-2" className="round-border" borderColor="black" />
            </div>
            <div className="component-group">
                <TextField id="text-field-3" className="green-border" backgroundColor="green" />
                <TextField id="text-field-4" className="green-border" backgroundColor="green" />
            </div>
            <div className="component-group">
                <H2>CITE</H2>
            </div>
            <div className="component-group">
                <img className="circular-image" src={'./PHINMA.jpg'} alt="CITE Logo" />
                <img className="circular-image" src={'./PHINMA.jpg'} alt="CITE Logo" />
            </div>
            <div className="component-group">
                <img className="square-rounded-image" src={'./PHINMA.jpg'} alt="Custom Image" />
                <img className="square-rounded-image" src={'./PHINMA.jpg'} alt="Custom Image" />
            </div>
        </div>
    );
};

export default Second;
