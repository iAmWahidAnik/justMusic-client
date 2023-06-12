import axios from 'axios';
import React from 'react';
import Swal from 'sweetalert2';

const UserTableData = ({ user, refetch }) => {
    const { _id, displayName, email, role } = user;
    const token = localStorage.getItem('token');
    if (!token) {
        return
    }

    const handleRole = (id, role) => {
        const update = { role }
        axios.patch(`http://localhost:3000/updaterole?id=${id}`, update, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        icon: 'success',
                        title: `User Updated to ${role} Successfully`
                    });
                }
            })
    }
    return (
        <tr>
            <td>
                {displayName}
            </td>
            <td>
                {email}
            </td>
            <td>
                <div className={`badge ${role === 'admin' ? 'badge-error' : role === 'instructor' ? 'badge-info' : 'badge-success'}`}>{role}</div>
            </td>
            <td>
                <button disabled={role === 'instructor'} onClick={() => handleRole(_id, 'instructor')} className='btn btn-info btn-xs mx-2'>Make Instructor</button>
                <button disabled={role === 'admin'} onClick={() => handleRole(_id, 'admin')} className='btn btn-error btn-xs mx-2'>Make Admin</button>

            </td>
        </tr>
    );
};

export default UserTableData;