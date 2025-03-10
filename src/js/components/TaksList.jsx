import React from "react"
import TaksItem from "./ItemList"


function TaksList(props) {
    if (props.tasks.length === 0){
        return <h4>insert tasks please</h4>
    } //Condicional para que si no hay tareas disponibles de un mensaje
    
    return (
        <>
            <div>
                {props.tasks.map(task =>(
                    < TaksItem key={task.id} task = {task} onDelete={props.onDelete} />
                ))}
            </div>
        </>
    )
};

export default TaksList;