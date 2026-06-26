import type {Metadata} from 'next';
import {FC} from "react";
import User from "@/app/components/user/User";
import {IUser} from "@/app/models/IUser";
import {apiService} from "@/app/services/api.service";

type Props = {
    params: { id: string };
};

export const generateMetadata = async ({params}: Props): Promise<Metadata> => {
    const {id} = await params
    return {
        title: `User ${id} page title`
    }
}

const UserPage: FC<Props> = async ({params}) => {
    const {id} = await params

    const user: IUser = await apiService.getUserById(id)

    return (
        <div>
            {user.id && <User key={id} user={user}/>}
            {!user.id && <div><h1>Wrong number (must be 1-10)</h1></div>}

        </div>
    );
};

export default UserPage;
