import React from "react";

const Item = ({ title, amount, data, time }) => {
 
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <span className="fw-bold">{title}</span>
      <span className="badge bg-primary rounded-pill">{amount} THB</span>
      <span className="badge bg-primary rounded-pill">
        วันที่บันทึก: {data}
      </span>
      <span className="badge bg-primary rounded-pill"> เวลาบันทึก: {time}</span>
    </li>
  );
};

export default Item;
