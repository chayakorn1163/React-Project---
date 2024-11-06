    import React, { useEffect, useState } from "react";
    import "bootstrap/dist/css/bootstrap.min.css";

    const AppForm = (props) => {
    const [title, setTitle] = useState("");
    const [amount, setMount] = useState(0);
    const [data, setData] = useState("");
    const [time, setTime] = useState("");

    useEffect(() => {
        const currentTime = new Date();
        const hours = String(currentTime.getHours()).padStart(2, "0");
        const minutes = String(currentTime.getMinutes()).padStart(2, "0");
        setTime(`${hours}:${minutes}`);

        const currentDate = currentTime.toISOString().split("T")[0]; // รูปแบบ yyyy-mm-dd
        setData(currentDate); // ตั้งค่าด้วยวันที่ปัจจุบัน
    }, []);

    const inputTitle = (event) => {
        setTitle(event.target.value);
    };

    const inputData = (event) => {
        setData(event.target.value);
    };

    const inputTime = (event) => {
        setTime(event.target.value);
    };

    const inputAmount = (event) => {
        setMount(event.target.value);
    };

    const saveItem = (event) => {
        event.preventDefault();
        const itemData = {
        title: title,
        amount: amount,
        data: data,
        time: time,
        };

        props.onAddItem(itemData);
        setTitle("");
        setMount(0);
        setData("");
        setTime("");
    };

    return (
        <div className="container mt-5">
        <form className="fs-4 bg-light p-4 rounded shadow-sm" onSubmit={saveItem}>
            <h2 className="text-center mb-4">บันทึกข้อมูลรายการ</h2>

            <div className="mb-3">
            <label className="form-label">ชื่อรายการ</label>
            <input
                type="text"
                placeholder="ระบุชื่อรายการ"
                name="name"
                className="form-control"
                onChange={inputTitle}
                value={title}
            />
            </div>

            <div className="mb-3">
            <label className="form-label">จำนวนเงิน</label>
            <input
                type="number"
                placeholder="ระบุจำนวนเงิน"
                name="amount"
                className="form-control"
                onChange={inputAmount}
                value={amount}
            />
            </div>

            <div className="mb-3">
            <label className="form-label">วันที่บันทึก</label>
            <input
                type="date"
                name="date"
                className="form-control"
                onChange={inputData}
                value={data}
            />
            </div>

            <div className="mb-3">
            <label className="form-label">เวลาที่บันทึก</label>
            <input
                type="time"
                name="time"
                onChange={inputTime}
                value={time}
                className="form-control"
            />
            </div>

            <div className="d-flex flex-column align-items-lg-stretch mt-4 mb-6 mx-auto">
            <button
                type="submit"
                className="btn btn-success border mb-3 btn-lg w-100"
            >
                บันทึกข้อมูล
            </button>
            <button
                type="reset"
                className="btn btn-danger btn-lg w-100 mb-3"
                onClick={() => {
                setTitle("");
                setMount(0);
                setData("");
                setTime("");
                }}
            >
                ล้างข้อมูล
            </button>
            </div>
        </form>
        </div>
    );
    };

    export default AppForm;
