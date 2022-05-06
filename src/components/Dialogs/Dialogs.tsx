import React from "react";
import {NavLink} from "react-router-dom";
import s from './Dialogs.module.css';

type DialogItemProps = {
    name: string;
    id: string
}

type MessageProps={
    sms: string;
}

const DialogItem = (props: DialogItemProps) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props:MessageProps) => {
    return (
        <div className={s.message}>{props.sms}</div>
    )
}


export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="German" id="1"/>
                <DialogItem name="Natalya" id="2"/>
                <DialogItem name="Tatyana" id="3"/>
                <DialogItem name="Vadim" id="4"/>
            </div>
            <div className={s.messages}>
                <Message sms="How is your day?"/>
                <Message sms="You can do it, dont give up"/>
                <Message sms="Lets gooo"/>
                <Message sms="AAAUUUUUUGH"/>
            </div>
        </div>
    )
}