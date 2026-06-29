import {IUser} from "@/app/models/IUser";
import {IPost} from "@/app/models/IPost";
import {IComment} from "@/app/models/IComment";

const baseUrl = 'https://jsonplaceholder.typicode.com'

export const apiService = {
    getUsers: async (): Promise<IUser[]> => {
        return await fetch(baseUrl + '/users')
            .then(res => res.json())
    },
    getUserById: async (id: string): Promise<IUser> => {
        return await fetch(baseUrl + '/users/' + id)
            .then(res => res.json())
    },
    getPosts: async (): Promise<IPost[]> => {
        return await fetch(baseUrl + '/posts')
            .then(res => res.json())
    },
    getPostById: async (id: string): Promise<IPost> => {
        return await fetch(baseUrl + '/posts/' + id)
        .then(res => res.json())
    },
    getComments: async ():Promise<IComment[]> => {
        return await fetch(baseUrl + '/comments')
            .then(res => res.json())
    },
    getCommentById: async (id: string): Promise<IComment> => {
        return await fetch(baseUrl + '/comments/' + id)
        .then(res => res.json())
    }
}
