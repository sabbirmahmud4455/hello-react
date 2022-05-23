import { useState } from "react";

export default function Todo(){

	const [todo, setTodo] = useState('')
	const [warning, setWarning] = useState(null)

	const handelInput = (e)=>{

		const value = e.target.value;
		const warning = value.includes('.js') ? 'You need javascript skill to complete the task' : null;

		setTodo(value);
		setWarning(warning);
	}

	return(

		<div>
			
			<input name="todo" value={todo} onChange={handelInput} />

			<p>{warning}</p>
		</div>
		
	)
}

