import type {Metadata} from 'next';
import {FC} from "react";
import User from "@/app/components/user/User";
import {IUser} from "@/app/models/IUser";
import {apiService} from "@/app/services/api.service";
import {SearchParams} from "next/dist/server/request/search-params";

type Props = {
    params: Promise<{ id: string }>;
    searchParams: Promise<SearchParams>
};

export const generateMetadata = async ({params}: Props): Promise<Metadata> => {
    const {id} = await params
    return {
        title: `User ${id} page title`
    }
}

const UserPage: FC<Props> = async ({searchParams}) => {

    const {data} = await searchParams


    if (typeof data === "string") {
        const obj = JSON.parse(data) as IUser
        console.log(obj)
        if (obj) {
            const user: IUser = await apiService.getUserById(obj.id.toString())
            return (
                <div>
                    {user.id && <User key={user.id} user={user}/>}
                    {!user.id && <div><h1>Wrong number (must be 1-10)</h1></div>}
                </div>
            );
        }
    }
};

export default UserPage;
