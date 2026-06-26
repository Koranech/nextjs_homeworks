import {IUser} from "@/app/models/IUser";

const baseUrl = 'https://jsonplaceholder.typicode.com'

export const apiService = {
    getUsers: async () => {
        return await fetch(baseUrl + '/users')
            .then(res => res.json())
    },
    getUserById: async (id: string): Promise<IUser> => {
        return await fetch(baseUrl + '/users/' + id)
            .then(res => res.json())
    },
    getPosts: async () => {
        return await fetch(baseUrl + '/posts')
            .then(res => res.json())
    },
    getPostById: async (id: string) => {
        return await fetch(baseUrl + '/posts/' + id)
        .then(res => res.json())
    },
    getComments: async () => {
        return await fetch(baseUrl + '/comments')
            .then(res => res.json())
    },
    getCommentById: async (id: string) => {
        return await fetch(baseUrl + '/comments/' + id)
        .then(res => res.json())
    }
}
