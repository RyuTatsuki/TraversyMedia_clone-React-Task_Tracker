// pass in tasks as a prop
// const Tasks = (props.tasks) => {} can also be used
const Tasks = ({ tasks }) => {
  return (
    <>
      {/* map() to get text for each one from [] above and output that */}
      {/* tasks is not defined but it's been passed in as a prop */}
      {tasks.map((task) => (
        // Warning: Each child in a list should have a unique "key" prop.
        // to avoid this warning, unique "key" prop is given
        <h3 key={task.id}>{task.text}</h3>
      ))}
    </>
  );
}

export default Tasks;
