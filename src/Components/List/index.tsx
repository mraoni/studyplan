import React from "react";
import Item from "./Item/Item";
import style from './List.module.scss';

function List() {

    const tasks = [
        {task: 'React', tempo: '02:00:00'},
        {task: 'JavaScript', tempo: '01:00:00'},
        {task: 'TypeScript', tempo: '01:30:00'}
    ];

    return (
        <aside className={style.taskList}>
            <h2>Study Day</h2>
            <ul>
                {tasks.map((item, index) => (
                    <Item
                        key={index}
                        task={item.task}
                        time={item.tempo}
                    />                   
                ))}             
            </ul>
        </aside>
    )
}
export default List;

