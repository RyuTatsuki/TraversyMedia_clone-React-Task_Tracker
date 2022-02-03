// useState is imported to App level
import { useState } from "react";
import Header from './components/Header';
// don't forget to import created new component
import Tasks from './components/Tasks';


function App() {
  // tasks state is moved from Tasks.js to make it as an App level, (or global) state
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
    <div className="container">
      <Header />
      {/* pass in Tasks component as a prop */}
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
