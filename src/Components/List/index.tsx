import React from "react";

function List() {

    const tasks = [
        {task: 'React', tempo: '02:00:00'},
        {task: 'JavaScript', tempo: '01:00:00'},
        {task: 'TypeScript', tempo: '01:30:00'}
    ];

    return (
        <div>
            <h2>Estudo do Dia</h2>
            <ul>
                {tasks.map((item, index) => (
                    <li>
                        <h3>{item.task}</h3>
                        <p>{item.tempo}</p>
                    </li>                 
                ))}             
            </ul>
        </div>
    )
}
export default List;

