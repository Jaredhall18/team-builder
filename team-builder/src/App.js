
import './App.css';
import React, { useState } from "react";
import Form from "./Components/Form"

const memberList = [
  {
    memberName: "Jared",
    memberEmail: "jared@gmail.com",
    memberRole: "Intern"
  },
  {
    memberName: "Jo",
    memberEmail: "Jo@gmail.com",
    memberRole: "Designer"
  }

]

const initialFormValues = {
  name:"",
  email:"",
  role:"",
}

function App() {
  const [team, setTeam] = useState([])

  const [formValues, setFormValues] =useState(initialFormValues)

  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue })
  }

  const submitForm = () => {

  }

  return (
    <div className="App">
      <h1>Form App</h1>

      {/* {error && <h2 className="error-text">{error}</h2>}  */}
      
      <Form 
      update={updateForm}
      submit={submitForm}
      values={formValues}/> 
      {/* Rendering Form */}
    </div>
  );
}

export default App;
