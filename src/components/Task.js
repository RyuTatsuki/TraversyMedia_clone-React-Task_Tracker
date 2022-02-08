import { FaTimes } from 'react-icons/fa';

// pass in onToggle as a prop
const Task = ({ task, onDelete, onToggle }) => {
  return (
    // onDoubleClick will call onToggle prop
    // create function in order to get id
    // conditional styling with `${}` and ternary operator
    <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
      <h3>
        {task.text}
        <FaTimes
          style={{ color: 'red', cursor: 'pointer' }}
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  );
}

export default Task;
