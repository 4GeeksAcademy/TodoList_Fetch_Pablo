import React from "react"

function TaksItem(props) {
    return (
        <>
            <div>
                <div class="card">
                    <div class="card-body d-flex">
                        <h5>{props.task.label}</h5> {/* Cambio a "laber" para adaptarse a la API */}
                        <button type="button" class="btn-close ms-auto" aria-label="Close" onClick={() => props.onDelete(props.task.id)}></button>
                    </div>
                </div>                
            </div>
        </>
    )
};

export default TaksItem;