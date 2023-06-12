import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react';
import { AuthContext } from '../../../../Providers/AuthProvider';
import PaymentTableData from './PaymentTableData';

const MyPaymentHistory = () => {
    const { user, loading } = useContext(AuthContext);
    const token = localStorage.getItem('token');
    if (!token) {
        return
    }
    if (loading) {
        return <button className="btn">
            <span className="loading loading-spinner"></span>
            loading
        </button>
    }

    const { data: myPaymentHistory, isLoading } = useQuery({
        queryKey: ['paymentHistory'],
        queryFn: async () => {
            const response = axios.get(`http://localhost:3000/payhistory?email=${user?.email}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            return response;
        }
    })
    if (isLoading) {
        return <button className="btn">
            <span className="loading loading-spinner"></span>
            loading
        </button>
    }
    const paymentHistory = myPaymentHistory?.data;
    return (
        <div className="overflow-x-auto my-20">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Date</th>
                        <th>Transaction ID</th>
                        <th>Student Email</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        paymentHistory.map((perHistory, index) => <PaymentTableData key={perHistory._id} perHistory={perHistory} index={index}></PaymentTableData>)
                    }
                    {/* <tr>
                        <th>1</th>
                        <td>Cy Ganderton</td>
                        <td>Quality Control Specialist</td>
                        <td>Blue</td>
                    </tr> */}
                </tbody>
            </table>
        </div>
    );
};

export default MyPaymentHistory;