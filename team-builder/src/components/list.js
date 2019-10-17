import React from "react";
import { Table } from 'reactstrap';

const TeamMemberList = props => {
    return (
        <div className="team-member-list">
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Role</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {props.teamMemberList.map((member, index) => {
                        return (
                            <tr>
                                <th scope="row">{index + 1}</th>
                                <td>{member.name}</td>
                                <td>{member.role}</td>
                                <td>{member.email}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    )
}
export default TeamMemberList