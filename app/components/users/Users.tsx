import User from "@/app/components/user/User";
import {apiService} from "@/app/services/api.service";
import {IUser} from "@/app/models/IUser";

const Users = async () => {

    const users: IUser[] = await apiService.getUsers();

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
