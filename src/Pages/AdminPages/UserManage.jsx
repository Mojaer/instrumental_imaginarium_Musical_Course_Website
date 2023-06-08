import UseAllUsers from "../../Components/useUsers/UseAllUsers";


const UserManage = () => {
    const [allUsers, allUserLoading] = UseAllUsers()

    if (allUserLoading) {
        return <div>loading......</div>
    }
    console.log(allUsers)
    return (
        <div>

        </div>
    );
};

export default UserManage;