import { ToDoContext } from '../public/context/context';
import './App.css';

import { useContext, useState } from 'react';

function App() {
  const { toDo, addToDo, deleteToDo, toggleToDo } = useContext(ToDoContext); // Access context
  const [title, setTitle] = useState(''); // State for input

  // const handleToggle = (id) => {
  //   toggleToDo(id)
  // }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim() === '') {
      alert('Task cannot be empty');
      return;
    }

    addToDo({
      id: Date.now(),
      title: title.trim(),
      completed: false,
    });

    setTitle(''); // Reset the input field
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          name="task"
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter Task"
        />
        <button type="submit">Submit</button>
      </form>

      {toDo.tasks.length > 0 ? (
        <ul>
          {toDo.tasks.map((item) => (
            <li key={item.id} >
              <p>Task: {item.title}</p>
              <p>Completed: {item.completed ? "True" : "False"}</p>
              <button style={{ marginRight: "2em" }} onClick={() => deleteToDo(item.id)}>Delete</button>
              <button onClick={() => toggleToDo(item.id)}>Toggle</button>
              <hr />
            </li>
          ))}
        </ul>
      ) : (
        <p>No To-Do List Found</p>
      )
      }
    </div >
  );
}

export default App;
