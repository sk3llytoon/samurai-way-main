import React from "react";
import s from './ProfileInfo.module.css'

export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={s.pic}
                     src="https://images.unsplash.com/photo-1511300636408-a63a89df3482?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVza3RvcCUyMHdhbGxwYXBlcnN8ZW58MHx8MHx8&w=1000&q=80"
                     alt=""/>
            </div>
            <div className={s.descriptionInfo}>
                ava + description
            </div>
        </div>
    )
}