export type StateType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPageType
}

export type PostsType = {
    id: number,
    message: string,
    likesCount: number
}

export type DialogsType = {
    id: number,
    name: string
}

export type MessagesType = {
    id: number,
    message: string
}

type ProfilePageType = {
    posts: Array<PostsType>
}

type MessagesPageType = {
    messages: Array<MessagesType>
    dialogs: Array<DialogsType>
}

export const state = {
    profilePage: {
        posts: [
            {id: 1, message: "Hi, how are you?", likesCount: 4},
            {id: 2, message: "Shut the fuck up", likesCount: 8}
        ]
    },
    messagesPage: {
        messages: [
            {id: 1, message: 'How is your day?'},
            {id: 2, message: 'You can do it, dont give up'},
            {id: 3, message: 'Lets gooo'},
            {id: 4, message: 'AAAUUUUUUGH'}
        ],
        dialogs: [
            {id: 1, name: 'German'},
            {id: 2, name: 'Natalya'},
            {id: 3, name: 'Tatyana'},
            {id: 4, name: 'Vadim'}
        ]
    }
}

export const addPost = (postMessage: string) => {
    const newPost: PostsType = {
        id: 5,
        message: postMessage,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost)
}