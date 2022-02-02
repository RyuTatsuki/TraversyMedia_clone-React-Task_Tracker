const tasks = [
  {
    id: 1,
    text: 'Doctors Appointment',
    day: 'Feb 5th at 2:30pm',
    reminder: true
  },
  {
    id: 2,
    text: 'Meeting at School',
    day: 'Feb 6th at 1:30pm',
    reminder: true
  },
  {
    id: 3,
    text: 'Food Shopping',
    day: 'Feb 5th at 2:30pm',
    reminder: false
  }
]

const Tasks = () => {
  return (
    <>
      {/* map() to get text for each one from [] above and output that */}
      {tasks.map((task) => (
        // Warning: Each child in a list should have a unique "key" prop.
        // to avoid this warning, unique "key" prop is given
        <h3 key={task.id}>{task.text}</h3>
      ))}
    </>
  );
}

export default Tasks;
