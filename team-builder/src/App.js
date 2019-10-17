import React, { useState } from 'react';
import './App.css';
import TeamMemberForm from "./components/Form"
import TeamMemberList from "./components/list"

function App() {
  const [members, setMembers] = useState([]);

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
