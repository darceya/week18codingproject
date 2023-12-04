import React from "react";
import {useState, useEffect} from 'react';



//export default class NewProject extends React.Component {

const NewProject = () => {
    const MOCK_API_URL = 'https://6541ce42f0b8287df1fee8ad.mockapi.io/Projects';
  
    const [newProjectName, setNewProjectName] = useState('');
    const [newProjectStartDate, setNewProjectStartDate] = useState('');
    const [newProjectEndDate, setNewProjectEndDate] = useState('');
    const [newProjectStatus, setNewProjectStatus] = useState('');
  
    const getProjects = () => {
      fetch(MOCK_API_URL)
        .then(data => data.json())
        .then(data => console.log(data));
    };

    const postNewProject = (e) => {
        e.preventDefault();
        console.log(
            newProjectName,
            newProjectStartDate,
            newProjectEndDate,
            newProjectStatus
        );

        fetch(MOCK_API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                projectName: newProjectName,
                projectStartDate: newProjectStartDate,
                projectEndDate: newProjectEndDate,
                projectStatus: newProjectStatus
        }),
    }).then(() => getProjects());
};

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
                    <button className="successButton" onClick={(e) => postNewProject(e)}>Submit</button>
                </form>
            </div>
);
}; 

export default NewProject;