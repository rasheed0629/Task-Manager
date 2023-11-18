import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [task, setTask] = useState({ title: '', description: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.title.trim()) {
      const newTask = { ...task, id: Date.now(), completed: false };
      addTask(newTask);
      setTask({ title: '', description: '' });
    }
    else{
        alert('Both title and description are required.');
      }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" placeholder="Task Title" value={task.title} onChange={handleChange}/>
    
      <textarea name="description" placeholder="Task Description" value={task.description}  onChange={handleChange}/>
        
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
