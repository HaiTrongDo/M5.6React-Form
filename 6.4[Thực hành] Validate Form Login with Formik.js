import React, {useState} from "react";
import {Formik} from "formik";
import './6.4[Thực hành] Validate Form Login with Formik.css';

export default function SignIn() {
    const REGEX = {
        name: /^[a-zA-Z]{2,}$/,
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        password: /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{6,}$/,
        phone: /^[+84]\d{9}/
    };

    const [form, setForm] = useState({});

    function handleChange(event) {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        });
    }

    function handleValidate() {
        const errors = {};
        if (!form.email) {
            errors.email = "Required";
        } else if (!REGEX.email.test(form.email)) {
            errors.email = "Invalid email address";
            console.log("code");
        }
        if (!form.password) {
            errors.password = "Required";
        }
        return errors;
    }

    function handleSubmit() {
        alert("Login in successfully!!!");
    }

    return (
        <div>
            <h1>Sign up</h1>
            <Formik
                initialValues={form}
                validate={handleValidate}
                onSubmit={handleSubmit}
            >
                {({errors, handleSubmit}) => (
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Name</label>
                            <input
                                type="text"
                                name="name"
                                value={form.name || ""}
                                onChange={handleChange}
                            />
                            <p className="error">{errors.name}</p>
                        </div>
                        <div>
                            <label>Email</label>
                            <input
                                type="text"
                                name="email"
                                value={form.email || ""}
                                onChange={handleChange}
                            />
                            <p className="error">{errors.email}</p>
                        </div>
                        <div>
                            <label>Phone</label>
                            <input
                                type="number"
                                name="phone"
                                value={Number(form.phone) || ""}
                                onChange={handleChange}
                            />
                            <p className="error">{errors.phone}</p>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                )}
            </Formik>
        </div>
    );
}