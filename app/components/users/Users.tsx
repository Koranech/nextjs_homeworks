"use client"

import {useEffect, useState} from "react";
import {apiService} from "@/app/services/api.service";
import {IUser} from "@/app/models/IUser";
import User from "@/app/components/user/User";

const Users = () => {
    const [users, setUsers] = useState<IUser[]>([])
    useEffect(() => {
        apiService.getUsers()
            .then(users => setUsers(users))
    }, []);
    return (
        <div>
            <h1>Users</h1>
            <hr/>
            {
                users.map(user =><User key={user.id} user={user} />)
            }
        </div>
    );
};

export default Users;
