import * as React from "react";

export type InputProps = {
	id: string;
	title: string;
	value: string;
};

export class Input extends React.Component<InputProps> {
	render() {
		return (
			<>
				<label htmlFor={this.props.id}>{this.props.title}</label>
				<input
					id={this.props.id}
					type="text"
					name={this.props.id}
					value={this.props.value}
				></input>
			</>
		);
	}
}
