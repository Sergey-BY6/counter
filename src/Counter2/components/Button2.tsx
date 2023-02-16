import React from 'react';
import s from "../Counter2.module.css"

type ButtonType = {
    name: string
    callback: () => void
    disabled: boolean
}

export const Button2: React.FC<ButtonType> = (props) => {


    return (
        <div>
            <button onClick={props.callback} disabled={props.disabled} className={s.button}>{props.name}</button>
        </div>
    );
};

