import React, {LegacyRef} from "react";
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {PostsType} from "../../../redux/state";

type MyPostsPropsType = {
    posts: PostsType[]
    addPost: (postMessage: string) => void
}
export const MyPosts = (props: MyPostsPropsType) => {

    let postsElements = props.posts.map((p) => <Post message={p.message} likes={p.likesCount}/>)

    const newPostElement = React.createRef<HTMLTextAreaElement>();

    const AddPost = () => {
        if (newPostElement.current) {
            props.addPost(newPostElement.current.value)
            newPostElement.current.value = ''
        }
    }

    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={AddPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}