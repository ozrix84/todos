import React, { useEffect, useState } from "react";
import Buttons from "../Buttons";

/**
 * Generator nahodnych ID
 */
const UUID = require('uuid-int');
const id = 0;
const generator = UUID(id);

/**
 * Vychozi hodnoty pro kazde todo
 * Presunuto mimo komponentu TodoControls, aby se pri kazdem jejim renderu
 * znovu zbytecne nevytvarely
 */
const defaultTodoValues = {
	name: null,
	description: null
};

/**
 * Ovladaci UI prvky pro vytvareni noveho todo
 */
export default function TodoControls(props) {
	/**
	 * Vnitrni state reprezentujici zakladni informace pro prave vytvarene todo
	 * (name, description)
	 */
	const [todo, setTodo] = useState(defaultTodoValues);

	/**
	 * Handler pro nastaveni nazvu todo
	 * onChange handler na inputu se vykonava po kazdem keystroke
	 * 
	 * { ...todo, name: e.target.value } = nastav state todo na novou hodnotu,
	 * kterou vyplnime predchozim stavem (...todo), a prepiseme property "name"
	 * na novou hodnotu. "description" zustava tedy zachovano
	 */
	const onChangeTitle = (e) => {
		setTodo({ ...todo, name: e.target.value });
	};

	/**
	 * Handler pro nastaveni popisu todo
	 * onChange handler na inputu se vykonava po kazdem keystroke
	 * 
	 * { ...todo, description: e.target.value } = nastav description v state todo na novou hodnotu,
	 * kterou vyplnime predchozim stavem (...todo), a prepiseme property "description"
	 * na novou hodnotu. "name" zustava tedy zachovano
	 */
	const onChangeDescription = (e) => {
		setTodo({ ...todo, description: e.target.value });
	};

	/**
	 * Handler pro reagovani na stisk tlacitka, ktere vyvari nove todo.
	 * Vezme aktualni state pro vytvarene todo (...{ name, description }), prida
	 * id, a vykona callback onAddTodo, kteremu preda vysledne todo
	 * onAddTodo se predava z volajici komponenty. Jedna se o zpusob, jak posilat 
	 * state smerem nahoru po komponentovem stromu.
	 */
	const onAddTodo = (e) => {
		props.onAddTodo({ ...todo, id: generator.uuid() });
	};

	return <div className={"todo-controls"}>
		<input onChange={onChangeTitle} placeholder={"Todo title"} />
		<input onChange={onChangeDescription} placeholder={"Todo description"} />
		<Buttons onAdd={onAddTodo} onSub={props.onRemoveTodo} />
	</div>;
}
