import React from "react"

/**
 * Tlacitko pro pridavani todo
 * handler pro reagovani na click cudlu se predava z volajici komponety
 * pres props
 */
export default function Buttons(props) {
	return <div className={"buttons"}>
		<button onClick={props.onAdd}>+ Add todo</button>
	</div>
}