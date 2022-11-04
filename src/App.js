
import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
    const [ShowAddTask, setShowAddTask]= useState(true)

  const [tasks, setTasks]= useState(
    [
        {id: 1,
            text:'Doctors Appointment',
            day: 'Feb 5th at 2:30pm',
            reminder: true,
        },
        {id: 2,
            text:'Meeting at School',
            day: 'Feb 6th at 1:30pm',
            reminder: true,
        },
        {id: 3,
            text:'Food Shopping',
            day: 'Feb 5th at 2:30pm',
            reminder: false,
        }
    ]
)
// Add Task
const addTask = (task) => {

    console.log('TASK:', task);
const id= Math.floor(Math.random() * 10000 ) +1

const newTask = { id, ...task }

setTasks([...tasks, newTask])

}

// delete Task

const deleteTask = (id) => {
    setTasks(tasks.filter((task)=> task.id !==id))
}

//Toggle Reminder

const toggleReminder = (id) =>{
    console.log('double clicked!');
setTasks(
    tasks.map((task)=> 
    task.id === id?{ ...tasks, reminder: !task.reminder}: task))

}

 
return (
    <div className='container'>
     <Header onAdd= {() => setShowAddTask(!ShowAddTask)} 
     ShowAdd ={ShowAddTask}/>

     {ShowAddTask && <AddTask onAdd= {addTask}/>}
     {tasks.length> 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>: 'No tasks To Show'}
     </div>
  )
}

export default App
