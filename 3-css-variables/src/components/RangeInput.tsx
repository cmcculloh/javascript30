import * as React from "react";

import { InputProps } from "./Input";

export type RangeInputProps = InputProps & {
	min: string;
	max: string;
	dataSizing: string;
};

export class RangeInput extends React.Component<RangeInputProps> {
	render() {
		return (
			<>
				<label htmlFor={this.props.id}>{this.props.title}</label>
				<input
					id={this.props.id}
					type="range"
					name={this.props.id}
					min={this.props.min}
					max={this.props.max}
					value={this.props.value}
					data-sizing={this.props.dataSizing}
				></input>
			</>
		);
	}
}
