import { useState } from "react";
import NewProject from "./components/NewProject.jsx";
import OnSelectProject from "./components/OnSelectProject.jsx";
import ProjectNotSelected from "./components/ProjectNotSelected.jsx";
import SideBar from "./components/SideBar.jsx";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: []
  });

  function handleAddTask(text) {
    setProjectState(prevState => {
      const taskId = Math.random();
      const newTask = {
        text:text,
        projectId: prevState.selectedProjectId,
        id: taskId,
      }

      return {
        ...prevState,
        tasks:[...prevState.tasks, newTask],
      };
    });
  }

  function handleDeleteTask(id) {
    setProjectState(prevState => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter(
          (task) => task.id !== id
        ),
      };
    });
  }

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

  function handleDeleteProject() {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectId
        ),
      };
    });
  }

  const onSelectProject = projectState.projects.find((project) => project.id === projectState.selectedProjectId);

  let content = (
    <OnSelectProject
      project={onSelectProject}
      onPress={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={projectState.tasks}
    />
  );

  if(projectState.selectedProjectId === null) {
    content = <NewProject onInsert={handleAddNewProject} onCancel={handleCancelProject} />;
  } else if(projectState.selectedProjectId === undefined) {
    content = <ProjectNotSelected onClickCreateProject={handleAddProject} />;
  }

  return (
    <main className="h-screen flex gap-8">
      <SideBar
        onClickAddProject={handleAddProject}
        project={projectState.projects}
        onSelectedProject={handleSelectedProject}
        selectedProjectId={projectState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
