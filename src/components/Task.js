// pass in task as a prop
const Task = ({ task }) => {
  return (
    <div className='task'>
      {/* use of prop rather than just hard coded text */}
      <h3>{task.text}</h3>
      <p>{task.day}</p>
    </div>
  );
}

export default Task;
