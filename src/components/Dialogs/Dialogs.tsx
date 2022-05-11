import React from "react";
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";

export const Dialogs = () => {

    let dialogs = [
        {id: 1, name: 'German'},
        {id: 2, name: 'Natalya'},
        {id: 3, name: 'Tatyana'},
        {id: 4, name: 'Vadim'}
    ];

    let messages = [
        {id: 1, message: 'How is your day?'},
        {id: 2, message: 'You can do it, dont give up'},
        {id: 3, message: 'Lets gooo'},
        {id: 4, message: 'AAAUUUUUUGH'}
    ];

    let dialogsElements = dialogs.map((d)=><DialogItem name={d.name} id={d.id}/>)
    let messagesElements = messages.map((m)=><Message sms={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}