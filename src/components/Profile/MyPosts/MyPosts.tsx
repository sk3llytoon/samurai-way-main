import React from "react";
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";

type PostsArrayType={
    id: number,
    message: string,
    likesCount: number
}

type PostsPropsType={
    posts: Array<PostsArrayType>
}

export const MyPosts = (props: PostsPropsType) => {

    let postsElements = props.posts.map((p)=><Post message={p.message} likes={p.likesCount}/>)

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