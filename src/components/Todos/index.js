import React, { useState, useEffect } from "react";
import TodoControls from "./components/TodoControls";
import Todo from "./components/Todo";

/**
 * Hlavni komponenta Todos
 * Udrzuje seznam todos, a dotazuje se na data
 * Zaroven vykresluje zbytek UI komponent
 */
export default function Todos() {
	/**
	 * Vytvor state pro jednotliva todos
	 * todos - samotna todos
	 * setTodos - metoda na nastaveni todos
	 */
	const [ todos, setTodos ] = useState();
	const [ foo, setFoo ] = useState("bar");

	/**
	 * Prvni mountu komponenty (prvni render) se dotazuj na data
	 */
	useEffect(() => {
		fetch("http://localhost:3001").then(response => response.json()).then(data => setTodos(data.todos));
	}, []);

	useEffect(() => {
		console.log("foo effect", foo);
	}, [ foo ]);

	/**
	 * Handler pro pridavani todos
	 * [ ...todos, todo ] = vytvor nove pole, nasyp do nej jiz existujici
	 * `todos (...todos), a pridej nove todo.
	 */
	const onAddTodo = (todo) => {
		setTodos([ ...todos, todo ]);
	};

	/**
	 * Handler pro odstranovani todos
	 * todos.filter na zaklade predane podminky zhodnoti, zda
	 * konkretni todo bude ze se seznamu odstraneno
	 */
	const onRemoveTodo = (id) => setTodos(todos.filter(todo => todo.id !== id));

	return <div className={"todos"}>
		<div className={"todos-container"}>
			{todos && todos.length > 0 && todos.map((todo, i) => {
				return <Todo onRemoveTodo={onRemoveTodo} key={i} data={todo} />;
			}) || <p style={{ textAlign: "center" }}>Not todos</p>}
		</div>
		<TodoControls onAddTodo={onAddTodo} onRemoveTodo={onRemoveTodo} />
	</div>
}
