import React from "react";
import {useState, useEffect} from 'react';



export default class NewProject extends React.Component {


    postNewProject = (e) => {
        e.preventDefault();
        const {
            newProjectName,
            newProjectStartDate,
            newProjectEndDate,
            newProjectStatus,
            getProjects,
            MOCK_API_URL,
        } = this.props;

        console.log(newProjectName, newProjectStartDate, newProjectEndDate, newProjectStatus);

        fetch(MOCK_API_URL, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                projectName: newProjectName,
                projectStartDate: newProjectStartDate,
                projectEndDate: newProjectEndDate,
                projectStatus: newProjectStatus
            })
        }).then(() => getProjects());
    }

    render() {
        const {
            setNewProjectName,
            setNewProjectStartDate,
            setNewProjectEndDate,
            setNewProjectStatus,
        } = this.props;

        return (
            <div className="newProject">
                <form>
                    <h3>New Project Form</h3>
                    <label>Project Name</label>
                    <input onChange={(e) => setNewProjectName(e.target.value)}></input>
                    <label>Project Start Date</label>
                    <input onChange={(e) => setNewProjectStartDate(e.target.value)}></input>
                    <label>Project End Date</label>
                    <input onChange={(e) => setNewProjectEndDate(e.target.value)}></input>
                    <label>Project Status</label>
                    <input onChange={(e) => setNewProjectStatus(e.target.value)}></input>
                    <button className="successButton" onClick={(e) => this.postNewProject(e)}>Submit</button>
                </form>
            </div>
        )
    }
}