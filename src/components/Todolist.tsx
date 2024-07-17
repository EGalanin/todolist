import React from 'react'
import {Button} from './Button';
import {Task, TaskType} from './Task';


type TodolistType = {
    title: string
    tasks: TaskType[]
    date?: string
}

export const Todolist = ({title, tasks, date}: TodolistType) => {

    const ArrayTasks = tasks.map((task: TaskType) => {
        return (
            <Task {...task} />
        )
    })

    return (
        <div>
            <h3>{title}</h3>
            {tasks.length === 0 ? (<p>Тасок нет</p>) : (
                <ul>
                    {ArrayTasks}
                </ul>
            )}

            <div>
                <Button title={'All'}/>
                <Button title={'Active'}/>
                <Button title={'Completed'}/>
            </div>
            <div>{date}</div>
        </div>
    )
}