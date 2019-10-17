import React, { useState } from "react";

const TeamMemberForm = props => {
    console.log("member props", props);
    const [member, setMember] = useState({
        name: "",
        email: "",
        role: ""
    });
    return (
        <form>
            <label>Name</label>
            <input
                name="name"
                id="name"
                type="name"
                placeholder="Name"
            />
            <label>Email</label>
            <input
                name="email"
                id="email"
                type="email"
                placeholder="Email" />
            <label>Role</label>
            <input
                name="role"
                id="role"
                type="role"
                placeholder="Role" />
            <button type="submit">Submit</button>
        </form>
    )
}
export default TeamMemberForm;