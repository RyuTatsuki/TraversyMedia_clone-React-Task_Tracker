// bring in FontAwesome from react-icons
import { FaTimes } from 'react-icons/fa';

const Task = ({ task }) => {
  return (
    <div className='task'>
      <h3>
        {/* added delete button with inline style */}
        {task.text} <FaTimes style={{ color: 'red', cursor: 'pointer' }} />
      </h3>
      <p>{task.day}</p>
    </div>
  );
}

export default Task;
