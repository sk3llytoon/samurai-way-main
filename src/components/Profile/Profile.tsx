import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

type PostsArrayType={
    id: number,
    message: string,
    likesCount: number
}

type PostsPropsType={
    posts: Array<PostsArrayType>
}

export const Profile = (props:PostsPropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts}/>
        </div>
    )
}