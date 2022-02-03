// import each task form Task.js component
import Task from "./Task";

const Tasks = ({ tasks }) => {
  return (
    <>
      {tasks.map((task) => (
        // key prop is necessary
        // pass in task as a prop
        <Task key={task.id} task={task} />
      ))}
    </>
  );
}

export default Tasks;
