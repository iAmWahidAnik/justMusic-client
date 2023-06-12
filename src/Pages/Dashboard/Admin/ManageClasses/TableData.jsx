import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Swal from 'sweetalert2';

const TableData = ({ perClass, refetch }) => {
  const { _id, className, classImage, instructorName, instructorEmail, availableSeat, price, status, totalEnrolledStudent } = perClass;
  const token = localStorage.getItem('token');
  if (!token) {
    return
  }
  const handleStatus = (id, status) => {
    axios.patch(`https://just-music-server-side.vercel.app/updatestatus/${id}?status=${status}`, { role: 'admin' }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => {
        if (res.data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            icon: 'success',
            title: `Class ${status} successfully`
          });
        }
      })
  }

  const handleFeedback = async (id) => {
    const { value } = await Swal.fire({
      title: 'Feedback',
      input: 'text',
      inputLabel: 'Your Feedback',
      inputPlaceholder: 'Enter your feedback'
    })

    if (value) {
      const newFb = { value }
      axios.patch(`https://just-music-server-side.vercel.app/updatefb?id=${id}`, newFb, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then(res => {
          if (res.data.modifiedCount > 0) {
            Swal.fire({
              icon: 'success',
              title: 'Feedback Sent Successfully'
            });
          }
        })
    } else {
      Swal.fire(`Empty Input`)
    }
  }
  return (
    <tr>
      <td>
        <div className="avatar">
          <div className="mask mask-squircle w-12 h-12">
            <img src={classImage} alt="class image" />
          </div>
        </div>
      </td>
      <td>
        {className}
      </td>
      <td>
        {instructorName}
      </td>
      <td>
        {instructorEmail}
      </td>
      <td>
        {availableSeat}
      </td>
      <td>
        <p className='text-right'>${price}</p>
      </td>
      <td>
        <p className={`badge ${status === 'approved' ? 'badge-success' : status === 'pending' ? 'badge-primary' : 'badge-error'}`}>{status}</p>
      </td>
      <td>
        <button disabled={status !== 'pending'} onClick={() => handleStatus(_id, 'approved')} className="btn btn-success btn-xs mx-1">Approve</button>
        <button disabled={status !== 'pending'} onClick={() => handleStatus(_id, 'denied')} className="btn btn-error btn-xs mx-1">Deny</button>
        <button onClick={() => handleFeedback(_id)} className="btn btn-primary btn-xs mx-1">Send Feedback</button>

      </td>
    </tr>
  );
};

export default TableData;