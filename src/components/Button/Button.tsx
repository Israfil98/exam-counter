import React from 'react';

type ButtonProps = {
    title: string
    callback: () => void
    disabled: boolean
}

function Button(props: ButtonProps) {
    return (
        <button disabled={ props.disabled } className="button"
                onClick={ () => props.callback() }>
            { props.title }
        </button>
    );
}

export default Button;
