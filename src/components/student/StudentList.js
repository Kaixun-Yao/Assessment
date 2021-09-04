import React from "react";
//import "./style.css"

export default function StudentList(props){

    return(
        <div>
            {props.render_students_list.map((student,index)=>
                    <div className="studentContainer" key={index}>
                            <img className="icon" src={student.pic} alt={student.firstName}></img>
                        <div>
                            <h3>{student.firstName.toUpperCase()} {student.lastName.toUpperCase()}</h3>
                            <ul>
                                <li>Email: {student.email}</li>
                                <li>Company: {student.company}</li>
                                <li>Skill: {student.skill}</li>
                                <li>Average: {props.calAvr(student.grades)}%</li>
                            </ul>
                        </div>
                    </div>
                )}
        </div>
    )
}