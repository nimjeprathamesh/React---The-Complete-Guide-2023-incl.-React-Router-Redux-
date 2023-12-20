import { useState } from "react";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import ProjectsSidebar from "./components/ProjectsSidebar.jsx";
import SelectedProject from "./components/SelectedProject.jsx";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
    selectedProjectTasks: [],
  });

  function handleAddTask(text) {
    setProjectsState((prevState) => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: taskId,
      }
  
      const updatedTasks = [...prevState.tasks, newTask];
      const updatedSelectedProjectTasks = prevState.selectedProjectId
        ? updatedTasks.filter((task) => task.projectId === prevState.selectedProjectId)
        : [];
  
      return {
        ...prevState,
        tasks: updatedTasks,
        selectedProjectTasks: updatedSelectedProjectTasks,
      };
    });
  }

  function handleDeleteTask(id) {
    setProjectsState((prevState) => {
      const updatedTasks = prevState.tasks.filter((task) => task.id !== id);
      const updatedSelectedProjectTasks = prevState.selectedProjectId
        ? updatedTasks.filter((task) => task.projectId === prevState.selectedProjectId)
        : [];
  
      return {
        ...prevState,
        tasks: updatedTasks,
        selectedProjectTasks: updatedSelectedProjectTasks,
      };
    });
  }

  function handleSelectProject(id) {
    setProjectsState((prevState) => {
      const selectedProject = prevState.projects.find((project) => project.id === id);
      return {
        ...prevState,
        selectedProjectId: id,
        selectedProjectTasks: selectedProject ? prevState.tasks.filter((task) => task.projectId === id) : [],
      };
    });
  }
  
  function handleStartAddProject() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleCancelAddProject() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectsState((prevState) => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId,
      }

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  function handleDeleteProject() {
    setProjectsState(prevState => {
      const filteredProjects = prevState.projects.filter(project => project.id !== prevState.selectedProjectId);
      const filteredTasks = prevState.tasks.filter(task => task.projectId !== prevState.selectedProjectId);
  
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: filteredProjects,
        tasks: filteredTasks,
      };
    });
  }
  

  const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectId);

  let content = (
    <SelectedProject
      project={selectedProject}
      onDelete={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={projectsState.selectedProjectTasks}
    />
  );

  if(projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />;
  } else if(projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen flex gap-8">
      <ProjectsSidebar
        onStartAddProject={handleStartAddProject}
        projects={projectsState.projects}
        onSelectProject={handleSelectProject}
        selectedProjectId={projectsState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
