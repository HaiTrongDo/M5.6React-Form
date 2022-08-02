import React, {useEffect, useState} from 'react';
import {Formik, Field, Form, ErrorMessage} from 'formik';


const Library = () => {
    const [input, setInput] = useState({title: '', quantity: 0})
    const [listBooks, setListBooks] = useState([])


    const submitHandler = (newBooks) => {

        setListBooks([...listBooks, newBooks])
    }
    const handleOnChange = (e) => {
        setInput({...input, [e.target.name]: e.target.value})
    }

    const handleOnEdit = (index) => {
        console.log(listBooks[index]);
        Formik.setFieldValue("title", listBooks[index].title, false)
        Formik.setFieldValue("quantity", listBooks[index].quantity, false)
    }
    const handleOnDelete = (index) => {

    }
    useEffect(() => {
        console.log(listBooks)

    }, [listBooks])

    const showListBooks = () => {
        return <tbody>
        {listBooks.map((book, index) => (
            <tr key={index}>
                <td>{book.title}</td>
                <td>{book.quantity}</td>
                <td>
                    <button onClick={() => {
                        handleOnEdit(index)
                    }}>Edit
                    </button>
                </td>
                <td>
                    <button onClick={() => {
                        handleOnDelete(index)
                    }}>Delete
                    </button>
                </td>

            </tr>
        ))}
        </tbody>
    }


    return (
        <div>
            <h1>Library</h1>
            <Formik
                // initialValues={input}
                // onSubmit={submitHandler}
                // enableReinitialize
            >
                {/*/!*     {formik => {*/}
                {/*    console.log(formik)*/}
                {/*}}*!/*/}
                {/*    <Form>*/}
                {/*        <label htmlFor="title">Title</label>*/}
                {/*        <Field*/}
                {/*            type="text"*/}
                {/*            name="title"*/}
                {/*            // onChange={handleOnChange}*/}
                {/*            placeholder="Enter Title"*/}
                {/*        /><ErrorMessage name="title"/>*/}
                {/*        <br/>*/}

                {/*        <label htmlFor="quantity">Quantity</label>*/}
                {/*        <Field*/}
                {/*            type="number"*/}
                {/*            name="quantity"*/}
                {/*            // onChange={handleOnChange}*/}
                {/*            placeholder="Enter Quantity"*/}
                {/*        /><ErrorMessage name="quantity"/>*/}
                {/*        <br/>*/}
                {/*        <button type="submit">Submit</button>*/}
                {/*    </Form>*/}
            </Formik>
            {/*<hr/>*/}
            {/*<table>*/}
            {/*    <thead>*/}
            {/*    <tr>*/}
            {/*        <th>No.</th>*/}
            {/*        <th>Title</th>*/}
            {/*        <th>Quantity</th>*/}
            {/*    </tr>*/}
            {/*    </thead>*/}
            {/*    {showListBooks()}*/}
            {/*</table>*/}
        </div>
    );
};

export default Library;