import React from 'react';

type DisplayProps = {
    value: number
}

function Display(props: DisplayProps) {
    return (
        <div className={props.value === 5 ? 'display-red' : 'display'}>
            { props.value }
        </div>
    );
}

export default Display;
