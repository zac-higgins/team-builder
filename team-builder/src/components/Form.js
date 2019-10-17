import React, { useState } from "react";

const TeamMemberForm = props => {
    console.log("member props", props);
    const [member, setMember] = useState({
        name: "",
        email: "",
        role: ""
    });
    const changeHandler = event => {
        setMember({ ...member, [event.target.name]: event.target.value });
    };
    const submitForm = event => {
        event.preventDefault();
        //props.addNewMember(member); <---- not sure
        setMember({ name: "", email: "", role: "" });
    };
    return (
        <form onSubmit={submitForm}>
            <label htmlFor="name">Name</label>
            <input
                name="name"
                id="name"
                type="name"
                placeholder="Name"
                onChange={changeHandler}
                value={member.title}
            />
            <label htmlFor="email">Email</label>
            <input
                name="email"
                id="email"
                type="email"
                placeholder="Email"
                onChange={changeHandler}
                value={member.email} />
            <label htmlFor="role">Role</label>
            <input
                name="role"
                id="role"
                type="role"
                placeholder="Role"
                onChange={changeHandler}
                value={member.role} />
            <button type="submit">Submit</button>
        </form>
    )
}
export default TeamMemberForm;