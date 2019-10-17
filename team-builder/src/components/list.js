import React from "react";


const TeamMemberList = props => {
    return (
        <div className="team-member-list">
            {props.teamMemberList.map((member, index) => {
                return (
                    <div className="member" key={index}>
                        <h2>{member.name}</h2>
                        <h3>{member.role}</h3>
                        <p>{member.email}</p>
                    </div>
                )
            })}
        </div>
    )
}
export default TeamMemberList