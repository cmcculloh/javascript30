import React from "react";
// import { Input } from "../components/Input";
import { ColorInput } from "../components/ColorInput";
import { RangeInput } from "../components/RangeInput";

export function Home() {
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
