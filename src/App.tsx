import React from 'react';
import './App.css';
import {Todolist} from './components/Todolist';
import {TaskType} from './components/Task';


function App() {
    const tasks1: TaskType[] = [
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'ReactJS', isDone: false},
        {id: 4, title: 'Redux', isDone: false},
        {id: 5, title: 'Typescript', isDone: false},
        {id: 6, title: 'RTK query', isDone: true},
    ]

    const tasks2: TaskType[] = [
        {id: 1, title: 'Hello world', isDone: true},
        {id: 2, title: 'I am Happy', isDone: false},
        {id: 3, title: 'Yo', isDone: false},
    ]

    const tasks3: TaskType[] = []


    return (
        <div className="App">
            <Todolist title="What to learn" tasks={tasks1} date={'13.07.2024'}/>
            <Todolist title="Learn JS" tasks={tasks2} date={'15.07.2024'}/>
            <Todolist title="Learn React" tasks={tasks3} date={'17.07.2024'}/>

        </div>
    )
}

export default App;
