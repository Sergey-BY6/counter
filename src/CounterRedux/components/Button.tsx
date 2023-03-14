import React from 'react';
import s from "../CounterRedux.module.css"


type ButtonType = {
    name: string
    callback: () => void
    disabled: boolean
}

export const Button: React.FC<ButtonType> = (props) => {


    return (
        <div>
            <button onClick={props.callback} disabled={props.disabled} className={s.button}>{props.name}</button>
        </div>
    );
};

