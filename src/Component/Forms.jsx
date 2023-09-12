import React, { useState } from 'react'

const Forms = () => {

    const [formvalue, setFormValue] = useState({
        fname: "",
        lname: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValue({ ...formvalue, [name]: value })
        console.log(formvalue);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <div style={{ margin: "150px" }}>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="fname">First name:</label> <br />
                    <input type="text" id="fname" name="fname" value={formvalue.fname} onChange={handleChange} /> <br />

                    <label htmlFor="lname">Last name:</label><br />
                    <input type="password" id="lname" name="lname" value={formvalue.lname} onChange={handleChange} /><br />

                    <button> Submit </button>
                </form>
            </div>
        </>
    )
}

export default Forms