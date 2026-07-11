import {IUser} from "@/app/models/IUser";
import {FC} from "react";
import Link from "next/dist/client/link";
type UserProps = {
    user: IUser;
}
const User:FC<UserProps> = ({user}) => {
    return (
        <>
            <p><Link href={{pathname: `/users/${user.id}`, query:{data: JSON.stringify(user)} }}>{user.id} - {user.username}</Link></p>

        </>
    );
};

export default User;
