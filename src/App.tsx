import React, { useState } from 'react';

import './App.css';

import Display from './components/Display/Display';
import Button from './components/Button/Button';

function App() {
    const [value, setValue] = useState<number>(0);

    const incrementValue = () => {
        setValue(value + 1);
    };
    const resetValue = () => {
        setValue(0);
    };

    return (
        <div className="app-container">
            This is awesome counter!!!
            <div className="counter-wrapper">
                <Display value={value} />
                <div className="buttons-wrapper">
                    <Button
                        title="inc"
                        callback={incrementValue}
                        disabled={value === 5}
                    />
                    <Button
                        title="reset"
                        callback={resetValue}
                        disabled={value === 0}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
