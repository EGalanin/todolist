import React from 'react';
// import {TaskType} from '../App';

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

export const Task = ({id, title, isDone}: TaskType) => {
    return (
        <li key={id}>
            <input type="checkbox" checked={isDone}/>
            <span>{title}</span>
        </li>
    );
};

