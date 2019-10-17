import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

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
        props.addNewMember(member);
        setMember({ name: "", email: "", role: "" });
    };
    return (
        <Form onSubmit={submitForm}>
            <Label htmlFor="name">Name</Label>
            <Input
                name="name"
                id="name"
                type="name"
                placeholder="Name"
                onChange={changeHandler}
                value={member.title}
            />
            <Label htmlFor="email">Email</Label>
            <Input
                name="email"
                id="email"
                type="email"
                placeholder="Email"
                onChange={changeHandler}
                value={member.email} />
            <Label htmlFor="role">Role</Label>
            <Input
                name="role"
                id="role"
                type="role"
                placeholder="Role"
                onChange={changeHandler}
                value={member.role} />
            <Button type="submit">Submit</Button>
        </Form>
    )
}
export default TeamMemberForm;