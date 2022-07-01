import * as React from "react";

import { InputProps } from "./Input";

export class ColorInput extends React.Component<InputProps> {
	render() {
		return (
			<>
				<label htmlFor={this.props.id}>{this.props.title}</label>
				<input
					id={this.props.id}
					type="color"
					name={this.props.id}
					value={this.props.value}
				></input>
			</>
		);
	}
}
