// import './App.css';
import React, { useState } from "react";


export default function Member(props) {
    const { details } = props

    if (!details) {
        return <h3>Working on fetching your friend&apos;s details...</h3>
    }

    return (
        <div>
            <h2>{details.memberName}</h2>
            <p>Email: {details.memberEmail}</p>
            <p>Role: {details.memberRole}</p>
        </div>
    )
}