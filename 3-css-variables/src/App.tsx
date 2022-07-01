import "./App.css";
import * as React from "react";

type InputProps = {
	id: string;
	title: string;
	value: string;
};

type RangeInputProps = InputProps & {
	min: string;
	max: string;
	dataSizing: string;
};

class Input extends React.Component<InputProps> {
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

class RangeInput extends React.Component<RangeInputProps> {
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

class ColorInput extends React.Component<InputProps> {
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

function App() {
	return (
		<div className="App">
			<h2>
				Update CSS Variables with <span className="hl">JS</span>
			</h2>

			<div className="controls">
				<RangeInput
					title="Spacing:"
					id="spacing"
					min="10"
					max="200"
					value="10"
					dataSizing="px"
				/>
				<RangeInput title="Blur:" id="blur" min="0" max="25" value="10" dataSizing="px" />
				<ColorInput title="Base Color" id="base" value="#ffc600" />
			</div>

			<img alt="something to blur" src="https://source.unsplash.com/7bwQXzbF6KE/800x500" />
		</div>
	);
}

export default App;
