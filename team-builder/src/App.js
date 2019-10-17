import React, { useState, useEffect } from 'react';
import './App.css';
import TeamMemberForm from "./components/Form"
import TeamMemberList from "./components/list"
import axios from "axios";

function App() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    axios
      .get('https://randomuser.me/api/?results=5')
      .then(res => {
        console.log("random people", res.data.results);
        res.data.results.map((person) => {
          return (
            name: person.name.first,
            email: person.email,
            role: "developer"
          )
        })
      })
      .catch(err => {
        console.log("The random people data was not returned", err);
      })
  })


  const addNewMember = member => {
    setMembers([...members, member]);
  };
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <TeamMemberForm addNewMember={addNewMember} />
      <TeamMemberList teamMemberList={members} />
    </div>
  );
}

export default App;
