import { useState } from "react";
import NewProject from "./components/NewProject.jsx";
import OnSelectProject from "./components/OnSelectProject.jsx";
import ProjectNotSelected from "./components/ProjectNotSelected.jsx";
import SideBar from "./components/SideBar.jsx";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProject: null,
    projects: []
  });

  function handleSelectedProject(id) {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  }

  function handleAddProject() {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleCancelProject() {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  function handleAddNewProject(projectData) {
    setProjectState(prevState => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId,
      }

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects:[...prevState.projects, newProject],
      };
    });
  }

  const onSelectProject = projectState.projects.find(project => project.id === projectState.selectedProjectId)

  let content = <OnSelectProject project={onSelectProject} />;

  if(projectState.selectedProjectId === null) {
    content = <NewProject onInsert={handleAddNewProject} onCancel={handleCancelProject} />;
  } else if(projectState.selectedProjectId === undefined) {
    content = <ProjectNotSelected onClickCreateProject={handleAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar onClickAddProject={handleAddProject} project={projectState.projects} onSelectedProject={handleSelectedProject} />
      {content}
    </main>
  );
}

export default App;
