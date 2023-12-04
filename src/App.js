
import './App.css';
import { Form, Link, NavLink, useLocation } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ProjectList} from "./components/ProjectList";
import NewProject from "./components/NewProjectForm"
import { Home } from "./components/Home";
import { Contact } from './components/Contact';
import { NewProjectForm } from "./components/NewProjectForm"
import NavBar from './components/Navigation';


function App() {
  return (
    <>
    
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectList />} />
        <Route path="new" element={<NewProject />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    
    </>
  );
}

export default App;
