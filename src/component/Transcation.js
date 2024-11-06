    import React from "react";
    import Item from "./Item";

    const Transaction = (props) => {
    const { item = [] } = props;

    return (
        <div className="container mt-4">
        <h1 className="text-center mb-4">แบบฟอร์มบันทึกรายรับรายจ่าย</h1>
        <div className="card shadow-sm p-3 fs-3">
            <ul className="list-group list-group-flush">
            {item.map((item, index) => (
                <Item
                key={index}
                title={item.title}
                amount={item.amount}
                data={item.data} 
                time={item.time}
                />
            ))}
            </ul>
        </div>
        </div>
    );
    };

    export default Transaction;
