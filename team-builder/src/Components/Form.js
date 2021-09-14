// import './App.css';
import React, { useState } from "react";
import TeamMember from "./TeamMember"

export default function Form(props) {
    const { values, update, submit } = props;

    const onChange = evt => {
        const name = evt.target.name;
        const value = evt.target.value;
        update(name, value);
    }

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }

    return (
        <form className='form container' onSubmit={onSubmit}>
            <div className='form-group inputs'>
                <label>Name
                    <input 
                    type="text"
                    name="name"
                    placeholder="Enter your name."
                    onChange={onChange}
                    value={values.name}
                    />
                </label>
                <label>Email
                    <input 
                    type="email"
                    name="email"
                    placeholder="Enter your Email."
                    onChange={onChange}
                    value={values.email}
                    />
                </label>
                <label>Role
                    <select value={values.role} name="role" onChange={onChange}>
                        <option value=''>-- Select a Role --</option>
                        <option value='Intern'>Intern</option>
                        <option value='Designer'>Designer</option>
                        <option value='Engineer'>Engineer</option>
                    </select>
                </label>
            </div>
            <div className='submit'>
                <button>Submit</button>
            </div>
        </form>
    )
}