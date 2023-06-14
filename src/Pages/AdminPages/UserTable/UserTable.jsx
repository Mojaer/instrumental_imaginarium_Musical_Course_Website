import Swal from "sweetalert2";
import useAxiosAction from "../../../Components/AxiosAction/useAxiosAction";


const UserTable = ({ user, refetch }) => {
    // console.log(user)
    const AxiosAction = useAxiosAction()
    const { email, imgUrl, role, name, _id } = user

    const handleRole = (role) => {
        AxiosAction.patch(`/users/${_id}`, { role: role })
            .then((data) => {
                if (data.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'user is updated successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={imgUrl} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name}</div>

                    </div>
                </div>
            </td>
            <td>
                {email}
                <br />
            </td>
            <td>{role}</td>
            <th className="flex flex-col">
                <button className="btn btn-primary  btn-xs" disabled={role === 'admin' ? true : false} onClick={() => handleRole('admin')}>Make Admin</button>
                <button className="btn btn-success mt-1 btn-xs" disabled={role === 'instructor' ? true : false} onClick={() => handleRole('instructor')}>Make Instructor</button>
            </th>
        </tr>
    );
};

export default UserTable;