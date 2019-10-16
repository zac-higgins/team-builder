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
            <label>Email</label>
            <label>Role</label>
        </form>
    )
}
export default TeamMemberForm;