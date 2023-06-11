import React from 'react';

const PaymentTableData = ({ perHistory, index }) => {
    const { paymentDate, paymentId, paymentStatus, studentEmail } = perHistory;
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{paymentDate}</td>
            <td>{paymentId}</td>
            <td>{studentEmail}</td>
            <td><div className='badge badge-success'>{paymentStatus}</div></td>
        </tr>
    );
};

export default PaymentTableData;