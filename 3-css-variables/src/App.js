import "./App.css";

function App() {
	return (
		<div className="App">
			<h2>
				Update CSS Variables with <span className="hl">JS</span>
			</h2>

			<div className="controls">
				<label for="spacing">Spacing:</label>
				<input
					id="spacing"
					type="range"
					name="spacing"
					min="10"
					max="200"
					value="10"
					data-sizing="px"
				></input>

				<label for="blur">Blur:</label>
				<input
					id="blur"
					type="range"
					name="blur"
					min="0"
					max="25"
					value="10"
					data-sizing="px"
				></input>

				<label for="base">Base Color</label>
				<input id="base" type="color" name="base" value="#ffc600"></input>
			</div>

			<img alt="something to blur" src="https://source.unsplash.com/7bwQXzbF6KE/800x500" />
		</div>
	);
}

export default App;
