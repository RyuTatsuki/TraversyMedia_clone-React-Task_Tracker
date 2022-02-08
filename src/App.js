import { useState } from "react";
import Header from './components/Header';
import Tasks from './components/Tasks';
// import AddTask component
import AddTask from "./components/AddTask";

function App() {
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

  // Add Task
  const addTask = (task) => {
    // generate random id
    const id = Math.floor(Math.random() * 10000) + 1;
    // newTask is an object with random id and copy of the task which is passed in
    const newTask = { id, ...task };

    // set tasks as an array with copy of current tasks and newTask object
    setTasks([...tasks, newTask]);

  }

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task));
  }

  return (
    <div className="container">
      <Header />
      {/* embed AddTask */}
      {/* pass addTask function as a prop into AddTask */}
      <AddTask onAdd={addTask} />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No Tasks to Show'}
    </div>
  );
}

export default App;
