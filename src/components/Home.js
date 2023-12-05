import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';

const Home = () => {
  const MOCK_API_URL = 'https://6541ce42f0b8287df1fee8ad.mockapi.io/Projects'

  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    // Fetch data from the API endpoint
    fetch(MOCK_API_URL)
      .then(response => response.json())
      .then(data => setProjectData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className='homeTitle'>
      Welcome to the Project Insight Hub
    <div className='cardContainer'> 
      <div className='cardBox'>
        {projectData.map((project, index) => (
          <Card key={index} style={{ width: '18rem' }} >
            <Card.Img variant="top" src="https://thumbs.dreamstime.com/b/wooden-toy-building-blocks-8497575.jpg" style={{ maxWidth: '100%', height: '300px' }}/>
            <Card.Body>
              <Card.Title>{project.projectName}</Card.Title>
              <Card.Text>
                Start Date: {project.projectStartDate} End Date: {project.projectEndDate} Status: {project.projectStatus}
              </Card.Text>
              <Button className='successButton'>Check Status</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Home;