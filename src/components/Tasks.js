import { useState } from "react";

const Tasks = () => {
  // rather than getting data from outside of component,
  // the data is now a part of this component state.
  // if you wanna change any part of state, you will wanna use setTasks.
  const [tasks, setTasks] = useState([
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
  ]);

  return (
    // things like tasks.push() cannot be used since state is immutable
    // setTasks([...tasks, {}]) can be used by creating new object
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
