import UseAllUsers from "../../Components/useUsers/UseAllUsers";
import UserTable from "./UserTable/UserTable";


const UserManage = () => {
    const [allUsers, allUserLoading, refetch] = UseAllUsers()

    if (allUserLoading) {
        return <div>loading......</div>
    }

    return (
        <div className="ms-4">
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>email</th>
                            <th>role</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            allUsers.map(user => <UserTable key={user._id} refetch={refetch} user={user}></UserTable>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserManage;