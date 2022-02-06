import Task from "./Task";

// pass in onDelete as a prop
const Tasks = ({ tasks, onDelete }) => {
  return (
    <>
      {tasks.map((task) => (
        // pass in onDelete as a prop
        <Task key={task.id} task={task} onDelete={onDelete} />
      ))}
    </>
  );
}

export default Tasks;
