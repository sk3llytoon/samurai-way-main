import React from "react";
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div>
            My Posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <Post message="Hi, how are you?" likes="4"/>
                <Post message="Shut the fuck up" likes="8"/>
            </div>
        </div>
    )
}