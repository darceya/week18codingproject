
import React from "react";
import '../App.css';
import Card from "react-bootstrap/Card";
import NewProject from "./NewProjectForm";
import {useState, useEffect} from 'react';


export function ProjectList() {

    const MOCK_API_URL = 'https://6541ce42f0b8287df1fee8ad.mockapi.io/Projects'
    
    const [projects, setProjects] = useState([{
      projectName: 'Thesis',
      projectStartDate: 'Jan 1 2024',
      projectEndDate: 'June 30 2024',
      projectStatus: "Backlog"
    }])

    const [newProjectName, setNewProjectName] = useState('')
    const [newProjectStartDate, setNewProjectStartDate] = useState('')
    const [newProjectEndDate, setNewProjectEndDate] = useState('')
    const [newProjectStatus, setNewProjectStatus] = useState('')
    
    const [updatedProjectName, setUpdatedProjectName] = useState('')
    const [updatedProjectStartDate, setUpdatedProjectStartDate] = useState('')
    const [updatedProjectEndDate, setUpdatedProjectEndDate] = useState('')
    const [updatedProjectStatus, setUpdatedProjectStatus] = useState('')
    
    function getProjects() {
      fetch(MOCK_API_URL)
      .then(data => data.json())
      .then(data => setProjects(data))
    }
    
    useEffect(() => {
      getProjects()
      console.log(projects)
    }, [])
    
    function deleteProject(id) {
      fetch(`${MOCK_API_URL}/${id}`, {
        method: 'DELETE'
      }).then(() => getProjects())
    
    }

    function updateProject(e, projectObject) {
        e.preventDefault()
        let updatedProjectObject = {
          ...projectObject,
          projectName: updatedProjectName,
          projectStartDate: updatedProjectStartDate,
          projectEndDate: updatedProjectEndDate,
          projectStatus: updatedProjectStatus
        }
      
        fetch(`${MOCK_API_URL}/${projectObject.id}`, {
          method: 'PUT',
          body: JSON.stringify(updatedProjectObject),
          headers: {
            "Content-Type": "application/json"
          }
        }).then(() => getProjects())
      }



    return (
        <div>
            <h1> Project List </h1>
            <div>
                {projects.map((project, index) => (
                    <div key={index}>
                        <div className="userContainer">
                            Project Name: {project.projectName}
                            Start Date: {project.projectStartDate}
                            End Date: {project.projectEndDate}
                            Status: {project.projectStatus}
                            <button className="dangerButton" onClick={() => deleteProject(project.id)}>Delete</button>
                        </div>

                        <div className="updateForm">
                            <form>
                                <label></label>
                                <input placeholder="Update Project Name" onChange={(e) => setUpdatedProjectName(e.target.value)}></input><br></br>
                                <label></label>
                                <input placeholder="Update Start Date" onChange={(e) => setUpdatedProjectStartDate(e.target.value)}></input><br></br>
                                <label></label>
                                <input placeholder="Update End Date" onChange={(e) => setUpdatedProjectEndDate(e.target.value)}></input><br></br>
                                <label></label>
                                <input placeholder="Update Status" onChange={(e) => setUpdatedProjectStatus(e.target.value)}></input><br></br>
                                <button className="editButton" onClick={(e) => updateProject(e, project)}>Update</button>
                            </form>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};
    
  

    