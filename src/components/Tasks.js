import React from 'react'
import TaskList from './TaskList';

const Tasks = ({tasks}) => {
  return (
    <div>
      {tasks.map((task) => (
        <TaskList key={task.id} task={task} />
      ))}
    </div>
  )
}
export default Tasks;
