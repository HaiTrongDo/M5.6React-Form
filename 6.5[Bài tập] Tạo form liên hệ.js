import {ErrorMessage, Field, Form, Formik} from "formik";
import './6.4[Thực hành] Validate Form Login with Formik.css';
import * as Yup from 'yup';

export default function SignIn() {

    function handleValidate() {
        return Yup.object({
            name: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Required'),
            email: Yup.string()
                .email('Invalid email address')
                .required('Required'),
            phone: Yup.string()
                .matches(/^\d{10}$/, "it has to 10 digit numbers")
                .required('Required'),
            message: Yup.string()
                .required('Required')
                .max(255, 'exceeded maximum characters')
        })
    }

    function handleSubmit() {
        alert("Login in successfully!!!");
    }

    return (
        <div>
            <h1>Sign up</h1>
            <Formik
                initialValues={{name: '', email: '', phone: '', message: ''}}
                validationSchema={handleValidate}
                onSubmit={handleSubmit}
            >
                <Form>
                    <div>
                        <label>Name</label>
                        <Field
                            type="text"
                            name="name"
                        />
                        <ErrorMessage name="name"/>
                    </div>
                    <div>
                        <label>Email</label>
                        <Field
                            type="text"
                            name="email"
                        />
                        <ErrorMessage name="email"/>
                    </div>
                    <div>
                        <label>Phone</label>
                        <Field
                            name="phone"
                        />
                        <ErrorMessage name="phone"/>
                    </div>
                    <div>
                        <label>Message</label>
                        <Field as="textarea" name="message"
                        />
                        <ErrorMessage name="message"/>
                    </div>
                    <button type="submit">Submit</button>
                </Form>

            </Formik>
        </div>
    );
}