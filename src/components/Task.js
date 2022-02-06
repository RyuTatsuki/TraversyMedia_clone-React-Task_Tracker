import { FaTimes } from 'react-icons/fa';

// pass in onDelete as a prop
const Task = ({ task, onDelete }) => {
  return (
    <div className='task'>
      <h3>
        {task.text}
        <FaTimes
          style={{ color: 'red', cursor: 'pointer' }}
          // call onDelete prop onClick
          // in order to get id, make onClick as a function
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  );
}

export default Task;
