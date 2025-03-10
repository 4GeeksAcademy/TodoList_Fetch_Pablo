import React, {useState} from "react"

function TaksForm (props) {
    const [title, setTitle] = useState ("");
    const [error, setError] = useState ("");

    function hadleSubmit(e) {
        e.preventDefault(); //Evita que se recargue la pagina al enviar un formulario o en este caso cuando
                            //Se imprime una tarea
        if (title.trim() === "") {
            setError("insert a task");
            return;
        }

        props.onAddTask(title);
        setTitle("");
        setError("");
    }

    return (
        <>
            <div>
                <form onSubmit={hadleSubmit}>
                    <input 
                    type="text" 
                    className={`form-control ${error ? "is-invalid" : ""}`} 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} 
                    placeholder="What needs to be done?" />
                    
                    {error && <div className="invalid-feedback">{error}</div>}
                    {/* Junto con el codigo de la linea 10-12 crea el mensaje de error si no se a escrito nada */}
                </form>
            </div>
        </>
    );
};

export default TaksForm;