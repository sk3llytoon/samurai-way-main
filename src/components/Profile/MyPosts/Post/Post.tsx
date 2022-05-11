import React from "react";
import s from './Post.module.css';

type MessagePropsType={
    message: string;
    likes: number
}

export const Post = (props: MessagePropsType) => {
    return (
        <div className={s.item}>
            <img src='https://www.freeiconspng.com/thumbs/profile-icon-png/account-profile-user-icon--icon-search-engine-10.png'/>
            {props.message}
            <div>
                <span>{props.likes}</span>
            </div>
        </div>
    )
}