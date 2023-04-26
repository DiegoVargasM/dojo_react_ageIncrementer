import React, { Component } from "react";

class PersonCard extends Component {
	/* Creamos el constructor para heredar 
	todas las funcionalidades del padre */
	constructor(props) {
		super(props)
		/* Almacenamos la edad en el estado del componente
		para poder actualizar la edad mediante setState() */
		this.state = {
			age: this.props.age //inicializamos el estado con la edad recibida como propiedad
		}
	}
	/* Actualizamos la edad con setSate */
	incrementAge = () => {
		this.setState ({age: this.state.age + 1}, () => {
		console.log('New age:', this.state.age);
		});
	}

	render() {
		const { firstName, lastName, hairColor } = this.props; /* retiramos age ya que no lo usamos */
		return (
			<div>
				<h1>{lastName}, {firstName}</h1>
				{/* Actualizamos el valor a mostrar en "Age" para
				mostrar el resultado del incremento */}
				<p>Age: {this.state.age}</p>
				<p>Hair Color: {hairColor}</p>
				{/* Le agregamos al botón la funcionalidad incrementAge */}
				<button onClick={ this.incrementAge }>Birthday Button for {firstName} {lastName}</button>
			</div>
		)
	}
}

export default PersonCard;