import React from 'react'
import {FaTimes} from 'react-icons/fa' 

const TaskList = ({task}) => {
  return (
    <div className='task'>
        <h3>{task.name} <FaTimes style={{color: 'red', cursor: 'pointer' }}/></h3>
        <p>{task.bio}</p>
        
    </div>
  )
}
export default TaskList;
