    import React, { useState } from "react";
    import "bootstrap/dist/css/bootstrap.min.css";

    const Form = () => {
    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        contact: "",
        gender: "",
        subject: "",
        resume: "",
        url: "",
        about: "",
    });

    const handleChanges = (e) => {
        setValues({ ...values, [e.target.name]: [e.target.value] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values);
    };
    return (
        <div className="container">
        <form onSubmit={handleSubmit} className="fs-4">
            <div className="mb-3">
            <label htmlFor="firstName" className="form-label">
                First Name
            </label>
            <input
                type="text"
                className="form-control"
                placeholder="Enter your first name"
                name="firstName"
                id="firstName"
                onChange={(e) => handleChanges(e)}
                required
            />
            </div>

            <div className="mb-3">
            <label htmlFor="lastName" className="form-label">
                Last Name
            </label>
            <input
                type="text"
                className="form-control"
                placeholder="Enter your last name"
                name="lastName"
                id="lastName"
                onChange={(e) => handleChanges(e)}
                required
            />
            </div>

            <div className="mb-3">
            <label htmlFor="email" className="form-label">
                Email
            </label>
            <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                name="email"
                id="email"
                onChange={(e) => handleChanges(e)}
                required
            />
            </div>

            <div className="mb-3">
            <label htmlFor="contact" className="form-label">
                Contact
            </label>
            <input
                type="text"
                className="form-control"
                placeholder="Enter your contact number"
                name="contact"
                id="contact"
                onChange={(e) => handleChanges(e)}
                required
            />
            </div>

            <div className="mb-3">
            <label className="form-label">Gender</label>
            <div>
                <input
                type="radio"
                name="gender"
                id="male"
                onChange={(e) => handleChanges(e)}
                />
                <label htmlFor="male" className="form-check-label">
                Male
                </label>
                <input
                type="radio"
                name="gender"
                id="female"
                className="ms-3"
                onChange={(e) => handleChanges(e)}
                />
                <label htmlFor="female" className="form-check-label">
                Female
                </label>
                <input
                type="radio"
                name="gender"
                id="other"
                className="ms-3"
                onChange={(e) => handleChanges(e)}
                />
                <label htmlFor="other" className="form-check-label">
                Other
                </label>
            </div>
            </div>

            <div className="mb-3">
            <label htmlFor="subject" className="form-label">
                Subject
            </label>
            <select
                name="subject"
                id="subject"
                onChange={(e) => handleChanges(e)}
                className="form-select"
            >
                <option value="math">Math</option>
                <option value="physics">Physics</option>
                <option value="english">English</option>
            </select>
            </div>

            <div className="mb-3">
            <label htmlFor="resume" className="form-label">
                Resume
            </label>
            <input
                type="file"
                className="form-control"
                name="resume"
                id="resume"
                onChange={(e) => handleChanges(e)}
            />
            </div>

            <div className="mb-3">
            <label htmlFor="url" className="form-label">
                URL
            </label>
            <input
                type="text"
                className="form-control"
                name="url"
                id="url"
                placeholder="Enter image URL"
                onChange={(e) => handleChanges(e)}
            />
            </div>

            <div className="mb-3">
            <label htmlFor="about" className="form-label">
                About
            </label>
            <textarea
                name="about"
                id="about"
                className="form-control"
                rows="5"
                onChange={(e) => handleChanges(e)}
            ></textarea>
            </div>

            <button type="reset" className="btn btn-secondary me-2">
            Reset
            </button>
            <button type="submit" className="btn btn-Dark">
            Submit
            </button>
        </form>
        </div>
    );
    };

    export default Form;
