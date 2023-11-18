import React from 'react';

const TaskList = ({ tasks, deleteTask, toggleTaskCompletion }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id} className={task.completed ? 'completed' : ''}>
          <span>{task.title}</span>
          <div>
            <button onClick={() => toggleTaskCompletion(task.id)}>
              {task.completed ? 'Undo' : 'Complete'}
            </button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
