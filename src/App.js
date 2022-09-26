import React from 'react'
import Header  from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react';

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id : 1,
      name : 'wasif zaman omee',
      bio : 'i am am enginner' 
    },
    {
      id : 2,
      name : 'md. rohim ahmed',
      bio : 'he is a man'
    },
    {
      id : 3,
      name : 'md. korim ahmed',
      bio : 'he is a teacher'
    }
  ])

    return (
      <div className='container'>
        <Header />
        <Tasks tasks={tasks}/>
      </div>
    )
}

export default App;