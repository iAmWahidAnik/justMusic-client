import React from 'react';

const PaymentTableData = ({ perHistory, index }) => {
    const { paymentDate, paymentId, paymentStatus, studentEmail } = perHistory;

    const dateObject = new Date(paymentDate);
    const formattedDate = dateObject.toLocaleString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        timeZone: "Asia/Dhaka" // Adjust the timezone as needed
    });
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{formattedDate}</td>
            <td>{paymentId}</td>
            <td>{studentEmail}</td>
            <td><div className='badge badge-success'>{paymentStatus}</div></td>
        </tr>
    );
};

export default PaymentTableData;