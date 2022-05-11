import React from "react";
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";

export const MyPosts = () => {

    let posts = [
        {id: 1, message: "Hi, how are you?", likesCount: 4},
        {id: 2, message: "Shut the fuck up", likesCount: 8}
    ]

    let postsElements = posts.map((p)=><Post message={p.message} likes={p.likesCount}/>)

    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}