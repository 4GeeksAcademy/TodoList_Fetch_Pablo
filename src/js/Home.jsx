import React, {useEffect, useState} from "react";
import TaksForm from "./components/WriteTaks"
import TaksList from "./components/TaksList"

//Usuario: PabloPh Creado el: 10/03/2025

	

function Home() {
	const [tasks, setTasks] = useState ([]);

	useEffect(() => {
		fetchTodos()
	}, []);

	const fetchTodos = async () => {
		try {
			const response = await fetch(
				"https://playground.4geeks.com/todo/users/PabloPh" //Link para conectar con la base de datos del usuario
			);

			if (!response.ok) {
				throw new Error("No hemos podido recuperar los datos");
			}

			const data = await response.json();
			console.log(data)
			setTasks(data.todos)

		} catch (error) {
			console.log("Tenemos un error" + error)
		}
	};

	const addTasks = async(label) => { //Función asincrona para subir el resultado de los <input> a una API.
		const newTask = {		
			label, 
			is_done: false
		};

		try  {
			const response = await fetch (
				"https://playground.4geeks.com/todo/todos/PabloPh", //Ruta de las tareas
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(newTask)
				}
			);

			if (!response.ok) {
				throw new Error("A ocurrido un error para crear una tarea");
		}
		const data = await response.json()

		setTasks([...tasks, data])

	}	catch (error) {
			console.log(error);
		}
	};

	const removeTask = async(id) => { // Funcion asincrona para eliminar una tarea de la base de datos (basandose en su "id").
		try {
			const response = await fetch(
				`https://playground.4geeks.com/todo/todos/${id}`,
				{
					method: "DELETE"
				}
			);

			if (!response.ok)
				throw new Error("A ocurrido un error para borrar una tarea");

			setTasks(prevTasks => prevTasks.filter((task) => task.id !== id));
		} catch (error) {
			console.log(error);
		}
	};

function removeAllWithForEach() {
	tasks.forEach((task) => {;
		removeTask(task.id);
	});
}

	return(
		<>
			<div className="container mt-5">
				< TaksForm onAddTask={addTasks} /> {/*  <Input> para escribir las tareas */}
				<button onClick={removeAllWithForEach}>Remove All</button>
				< TaksList tasks={tasks} onDelete={removeTask} /> {/* Zona donde se imprime los datos capturados del <Input> */}
			</div>
		</>
	)
};

export default Home;