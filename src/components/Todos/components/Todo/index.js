import React from "react";

/**
 * UI konkretniho todo
 * Data pro todo se predavaji pres props
 * Zaroven se sem predava handler pro odstraneni todo
 */
export default function Todo(props) {
	const { id, name, description } = props.data;

	return <div className={"todo"}>
		<h2>{name}</h2>
		<p>{description}</p>
		<button onClick={() => props.onRemoveTodo(id)}>X</button>
	</div>;
}
