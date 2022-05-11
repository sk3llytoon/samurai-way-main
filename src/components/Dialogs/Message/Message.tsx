import React from "react";
import s from './../Dialogs.module.css';

type MessageProps = {
    sms: string;
}

export const Message = (props: MessageProps) => {
    return (
        <div className={s.message}>{props.sms}</div>
    )
}