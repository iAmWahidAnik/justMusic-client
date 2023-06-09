import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Swal from 'sweetalert2';

const TableData = ({ perClass }) => {
  const { _id, className, classImage, instructorName, instructorEmail, availableSeat, price, status, totalEnrolledStudent } = perClass;

  const handleFeedback = async (id) => {
    const { value } = await Swal.fire({
      title: 'Feedback',
      input: 'text',
      inputLabel: 'Your Feedback',
      inputPlaceholder: 'Enter your feedback'
    })

    if (value) {
      const newFb = {value}
      axios.patch(`http://localhost:3000/updatefb?id=${id}`, newFb)
        .then(res => {
          if (res.data.modifiedCount > 0) {
            Swal.fire({
              icon: 'success',
              title: 'Feedback Sent Successfully'
            });
          }
        })
      // Swal.fire({
      //   icon: 'success',
      //   title: 'Feedback Sent Successfully'
      // });
    } else {
      Swal.fire(`Empty Input`)
    }
  }

  const handleApprove = async (id, status) => {
    try {
      const response = await axios.patch(`http://localhost:3000/updatestatus/${id}?status=${status}`);
      const updatedClass = response.data;
      console.log(updatedClass);
      if (updatedClass.modifiedCount > 0) {
        refetch();
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer);
            toast.addEventListener('mouseleave', Swal.resumeTimer);
          }
        });

        Toast.fire({
          icon: 'success',
          title: 'Status Updated successfully'
        });
      }
    } catch (error) {
      // Handle error
      console.log('error hoia geseeeee');
    }
  };

  const { refetch } = useQuery({
    queryKey: ['updateClass'],
    queryFn: () => handleApprove(id, status),
    enabled: false,
  });

  // const handleApprove = (id, status) => {
  //     const { data: updatedClass, refetch, isLoading } = useQuery({
  //         queryKey: ['updateClass'],
  //         queryFn: async () => {
  //             const response = axios.patch(`http://localhost:3000/updatestatus/${id}?status=${status}`)
  //             return response;
  //         }
  //     })
  //     if (updatedClass.data.updatedCount > 0) {
  //         refetch();
  //         const Toast = Swal.mixin({
  //             toast: true,
  //             position: 'top-end',
  //             showConfirmButton: false,
  //             timer: 3000,
  //             timerProgressBar: true,
  //             didOpen: (toast) => {
  //                 toast.addEventListener('mouseenter', Swal.stopTimer)
  //                 toast.addEventListener('mouseleave', Swal.resumeTimer)
  //             }
  //         })

  //         Toast.fire({
  //             icon: 'success',
  //             title: 'Status Updated successfully'
  //         })
  //     }
  // }
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
        <p className='badge badge-error'>{status}</p>
      </td>
      <td>
        <button disabled={status !== 'pending'} onClick={() => handleApprove(_id, 'approved')} className="btn btn-primary btn-xs mx-1">Approve</button>
        <button disabled={status !== 'pending'} onClick={() => handleApprove(_id, 'deny')} className="btn btn-primary btn-xs mx-1">Deny</button>
        <button onClick={() => handleFeedback(_id)} className="btn btn-primary btn-xs mx-1">Send Feedback</button>

      </td>
    </tr>
  );
};

export default TableData;