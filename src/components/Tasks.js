import Task from "./Task";

// catch onToggle prop
const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          // pass in the prop of onToggle
          onToggle={onToggle}
        />
      ))}
    </>
  );
}

export default Tasks;
