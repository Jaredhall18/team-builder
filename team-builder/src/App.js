
import './App.css';
import React, { useState } from "react";
import Form from "./Components/Form"
import TeamMember from "./Components/TeamMember"

// const memberList = [
//   {
//     memberName: "Jared",
//     memberEmail: "jared@gmail.com",
//     memberRole: "Intern"
//   },
//   {
//     memberName: "Jo",
//     memberEmail: "Jo@gmail.com",
//     memberRole: "Designer"
//   }

// ]

const initialFormValues = {
  name:"",
  email:"",
  role:"",
}

function App() {
  const [team, setTeam] = useState([])

  const [formValues, setFormValues] =useState(initialFormValues)

  const [error, setError] = useState("")

  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue })
  }

  const submitForm = () => {
    const newMember = {
      memberName: formValues.name.trim(),
      memberEmail: formValues.email.trim(),
      memberRole: formValues.role
    }
    if (!newMember.memberName) {
      setError("you must enter a username");
    }else if (!newMember.memberEmail) {
      setError("you must enter an email");
    }else if (!newMember.memberRole) {
      setError("you must select a role");
    } else {
      setTeam(team.concat(newMember));
      setFormValues(initialFormValues);
      // setError("")
    }

    // if (!error) {
    //   setTeam(team.concat(newMember));
    //   setFormValues(initialFormValues)
    // }
    
  }

  return (
    <div className="App">
      <h1>Members List</h1>

      {error && <h2 className="error-text">{error}</h2>} 
      
      <Form 
      update={updateForm}
      submit={submitForm}
      values={formValues}/> 
      {/* Rendering Form */}
      {
        team.map(member => {
          return(
            <TeamMember key={member.id} details={member} />
          )
        })
      }
    </div>
  );
}

export default App;
